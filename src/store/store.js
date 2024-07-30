import { configureStore } from '@reduxjs/toolkit';
import {listingsApi} from "@/services/listingApi";
import {projectApi} from "@/services/projectApi";
import {partnersApi} from "@/services/partnersApi";


const store = configureStore({
     reducer: {
         [listingsApi.reducerPath]: listingsApi.reducer,
         [projectApi.reducerPath]: projectApi.reducer,
         [partnersApi.reducerPath]: partnersApi.reducer,
     },
     middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware()
               .concat(listingsApi.middleware)
               .concat(projectApi.middleware)
               .concat(partnersApi.middleware),

});

export default store;
