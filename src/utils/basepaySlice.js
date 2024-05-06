import { createSlice } from '@reduxjs/toolkit';

const basepaySlice = createSlice({
  name: 'basepay',
  initialState: null, 
  reducers: {
    updateBasepayOption: (state, action) => {
      return action.payload; 
    },
    clearBasepayOption: (state) => {
      return null; 
    },
  },
});

export const { updateBasepayOption, clearBasepayOption } = basepaySlice.actions;

export default basepaySlice.reducer;
