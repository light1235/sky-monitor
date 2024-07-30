import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const partnersApi = createApi({
     reducerPath: 'partnersApi',
     baseQuery: fetchBaseQuery({ baseUrl: 'https://raw.githubusercontent.com/light1235/sky-monitor/master/src/db/partnersData.json' }),
     endpoints: (builder) => ({
          getPartners: builder.query({
               query: () => '',
               keepUnusedDataFor: 60,
          }),
     }),
});

export const {useGetPartnersQuery} = partnersApi;
