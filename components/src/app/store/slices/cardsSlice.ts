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
};

const initialState = {
  cards: [] as Array<CardsStateType>,
  isLoading: false,
};
export const fetchCards = createAsyncThunk(
  'cards/fetchCards',
  async (params: { searchValInput: string }) => {
    const res = await instance.get(`?query=${params.searchValInput}&client_id=${api_client}`);
    return res.data.results;
  }
);

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCards.pending, (state) => {
      state.cards = [];
      state.isLoading = true;
    });

    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.cards = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchCards.rejected, (state) => {
      state.cards = [];
      state.isLoading = false;
    });
  },
});

export const cardsReducer = cardsSlice.reducer;

export const loading = (state: RootState) => state.cards.isLoading;
export const cards = (state: RootState) => state.cards.cards;
