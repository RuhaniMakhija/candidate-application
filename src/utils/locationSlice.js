import { createSlice } from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    locationName: '', 
  },
  reducers: {
    updateLocationName: (state, action) => {
      state.locationName = action.payload; 
    },
  },
});

export const { updateLocationName } = locationSlice.actions;

export default locationSlice.reducer;
