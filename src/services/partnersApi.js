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


export default async function getPartners() {
     const res = await fetch('https://raw.githubusercontent.com/light1235/sky-monitor/master/src/db/partnersData.json')

     if (!res.ok) {
          // This will activate the closest `error.js` Error Boundary
          throw new Error('Failed to fetch data')
     }

     const jsonData = await res.json();

     const reversedData = jsonData.reverse();

     return reversedData;
}

