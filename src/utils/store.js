import {configureStore} from "@reduxjs/toolkit";
import rolesReducer from "./rolesSlice";
import jobsReducer from "./jobListingSlice";
import companyReducer from "./companySlice";
import locationRedecer from "./locationSlice";
import experienceReducer from "./experienceSlice";
const store=configureStore({
    reducer:{
        roles:rolesReducer,
        jobs:jobsReducer,
        companyName:companyReducer,
        locationName:locationRedecer,
        experience:experienceReducer
    }
})

export default store;
