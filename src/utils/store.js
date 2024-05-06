import {configureStore} from "@reduxjs/toolkit";
import rolesReducer from "./rolesSlice";
import jobsReducer from "./jobListingSlice";
import companyReducer from "./companySlice";
const store=configureStore({
    reducer:{
        roles:rolesReducer,
        jobs:jobsReducer,
        companyName:companyReducer
    }
})

export default store;
