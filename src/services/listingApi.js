import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const listingsApi = createApi({
     reducerPath: 'listingsApi',
     baseQuery: fetchBaseQuery({ baseUrl: 'https://raw.githubusercontent.com/light1235/sky-monitor/master/src/db/listingData.json' }),
     endpoints: (builder) => ({
          getListings: builder.query({
               query: () => '',
               keepUnusedDataFor: 60,
          }),
     }),
});

export const {useGetListingsQuery} = listingsApi;
