import { createSlice } from '@reduxjs/toolkit';

const companySlice = createSlice({
  name: 'companyName',
  initialState: {
    companyName: '', // Initial value of the company name
  },
  reducers: {
    updateCompanyName: (state, action) => {
      state.companyName = action.payload; // Update the company name in the state
    },
  },
});

export const { updateCompanyName } = companySlice.actions;

export default companySlice.reducer;
