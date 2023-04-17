import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type FormData = {
  title: string;
  date: string;
  category: string;
  checkbox: string;
  gender: string;
  file: string;
};

const initialState = {
  formValue: [] as Array<FormData>,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormValue: (state, action) => {
      state.formValue.push(action.payload);
    },
  },
});
export const formReducer = formSlice.reducer;

export const formValue = (state: RootState) => state.form.formValue;

export const { setFormValue } = formSlice.actions;
