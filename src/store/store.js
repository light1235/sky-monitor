import { configureStore } from '@reduxjs/toolkit';
import {listingsApi} from "@/services/listingApi";
import {projectApi} from "@/services/projectApi";


const store = configureStore({
     reducer: {
         [listingsApi.reducerPath]: listingsApi.reducer,
         [projectApi.reducerPath]: projectApi.reducer,
     },
     middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(listingsApi.middleware).concat(projectApi.middleware),

});

export default store;
