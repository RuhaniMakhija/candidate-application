import {createSlice} from "@reduxjs/toolkit"

const rolesSlice=createSlice({
    name:"roles",
    initialState:{
        items:[]
    },
    reducers:{
        addRoles:(state,action)=>{
            state.items.push(action.payload) 
        },
        removeRoles: (state, action) => {
            const indexToRemove = state.items.findIndex(item => item === action.payload);
            if (indexToRemove !== -1) {
              state.items.splice(indexToRemove, 1);
            }
          },
        clearRoles:(state)=>{
            state.items.length=0;
        }
    }
})

export const {addRoles,removeRoles,clearRoles}= rolesSlice.actions;

export default rolesSlice.reducer;