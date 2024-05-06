import {configureStore} from "@reduxjs/toolkit";
import rolesReducer from "./rolesSlice";
import jobsReducer from "./jobListingSlice";
import companyReducer from "./companySlice";
import locationRedecer from "./locationSlice";
const store=configureStore({
    reducer:{
        roles:rolesReducer,
        jobs:jobsReducer,
        companyName:companyReducer,
        locationName:locationRedecer
    }
})

export default store;
