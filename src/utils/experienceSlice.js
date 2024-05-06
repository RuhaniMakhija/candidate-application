import { createSlice } from '@reduxjs/toolkit';

const experienceSlice = createSlice({
  name: 'selectedOption',
  initialState: null, 
  reducers: {
    updateExperienceOption: (state, action) => {
      return action.payload; 
    },
    clearExperienceOption: (state) => {
      return null; 
    },
  },
});

export const { updateExperienceOption, clearExperienceOption } = experienceSlice.actions;

export default experienceSlice.reducer;
