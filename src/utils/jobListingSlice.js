import {createSlice} from "@reduxjs/toolkit"

const jobListingSlice=createSlice({
    name:"jobs",
    initialState:{
        items:[]
    },
    reducers:{
        addJobs:(state,action)=>{
            state.items = [...state.items, ...action.payload];
        },
        removeJobs: (state, action) => {
            const indexToRemove = state.items.findIndex(item => item === action.payload);
            if (indexToRemove !== -1) {
              state.items.splice(indexToRemove, 1);
            }
          },
       
    }
})

export const {addJobs,removeJobs}= jobListingSlice.actions;

export default jobListingSlice.reducer;