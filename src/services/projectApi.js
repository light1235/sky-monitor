import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const projectApi = createApi({
     reducerPath: 'projectApi',
     baseQuery: fetchBaseQuery({ baseUrl: 'https://raw.githubusercontent.com/light1235/sky-monitor/master/src/db/listingData.json' }),
     endpoints: (builder) => ({
          getProject: builder.query({
               query: () => '',
               keepUnusedDataFor: 60,
          }),
     }),
});

export const {useGetProjectQuery} = projectApi;
