import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { instance } from 'app/api/api';
import { api_client } from 'pages/main/constants/api';

export type CardsStateType = {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: null;
  color: string;
  alt_description: string;
  description: string;
  downloads: number;
  height: number;
  likes: number;
  location: {
    name: string;
    city: string;
    country: string;
    position: {
      latitude: number;
      longitude: number;
    };
  };
  urls: { regular: string };
  user: {
    bio: string;
    name: string;
    portfolio_url: string;
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    total_collections: number;
    total_likes: number;
    total_photos: number;
  };
  views: number;
  width: number;
  tags: Array<{
    title: string;
  }>;
};

const initialState = {
  cards: [] as Array<CardsStateType>,
  card: {} as CardsStateType | null,
  isLoading: false,
  isModal: false,
};
export const fetchCards = createAsyncThunk(
  'cards/fetchCards',
  async (params: { searchValInput: string }) => {
    const res = await instance.get(
      `search/photos/?query=${params.searchValInput}&client_id=${api_client}`
    );
    return res.data.results;
  }
);

export const fetchOneCard = createAsyncThunk(
  'cards/fetchOneCard',
  async (params: { id: string }) => {
    const res = await instance.get(`photos/${params.id}?client_id=${api_client}`);
    return res.data;
  }
);

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCards.pending, (state) => {
      state.cards = [];
      state.card = null;
      state.isLoading = true;
    });

    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.cards = action.payload;
      state.isLoading = false;
      state.card = null;
    });
    builder.addCase(fetchCards.rejected, (state) => {
      state.cards = [];
      state.card = null;
      state.isLoading = false;
    });
    builder.addCase(fetchOneCard.pending, (state) => {
      state.isModal = false;
      state.card = null;
    });

    builder.addCase(fetchOneCard.fulfilled, (state, action) => {
      state.card = action.payload;
      state.isModal = true;
    });
    builder.addCase(fetchOneCard.rejected, (state) => {
      state.isModal = false;
      state.card = null;
    });
  },
});

export const cardsReducer = cardsSlice.reducer;

export const loading = (state: RootState) => state.cards.isLoading;
export const isModal = (state: RootState) => state.cards.isModal;
export const cards = (state: RootState) => state.cards.cards;
export const card = (state: RootState) => state.cards.card;
