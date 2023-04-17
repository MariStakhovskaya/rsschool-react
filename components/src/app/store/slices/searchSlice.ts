import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  searchInput: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchInput = action.payload;
    },
  },
});
export const searchReducer = searchSlice.reducer;

export const searchValue = (state: RootState) => state.search.searchInput;

export const { setSearchValue } = searchSlice.actions;
