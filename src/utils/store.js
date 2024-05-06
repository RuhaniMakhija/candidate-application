import {configureStore} from "@reduxjs/toolkit";
import rolesReducer from "./rolesSlice";
import jobsReducer from "./jobListingSlice";
const store=configureStore({
    reducer:{
        roles:rolesReducer,
        jobs:jobsReducer
    }
})

export default store;
