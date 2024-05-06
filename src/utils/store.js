import {configureStore} from "@reduxjs/toolkit";
import rolesReducer from "./rolesSlice";
import jobsReducer from "./jobListingSlice";
import companyReducer from "./companySlice";
import locationRedecer from "./locationSlice";
import experienceReducer from "./experienceSlice";
import basepayReducer from "./basepaySlice";
const store=configureStore({
    reducer:{
        roles:rolesReducer,
        jobs:jobsReducer,
        companyName:companyReducer,
        locationName:locationRedecer,
        experience:experienceReducer,
        basepay:basepayReducer
    }
})

export default store;
