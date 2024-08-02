import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const projectApi = createApi({
     reducerPath: 'projectApi',
     baseQuery: fetchBaseQuery({ baseUrl: 'https://raw.githubusercontent.com/light1235/sky-monitor/master/src/db/articleData.json' }),
     endpoints: (builder) => ({
          getProject: builder.query({
               query: () => '',
               keepUnusedDataFor: 60,
          }),
     }),
});

export const {useGetProjectQuery} = projectApi;

export default async function getData() {
     const res = await fetch('https://raw.githubusercontent.com/light1235/sky-monitor/master/src/db/articleData.json');

     if (!res.ok) {
          throw new Error('Failed to fetch data');
     }

     const jsonData = await res.json(); // Преобразование ответа в JSON

     const reversedData = jsonData.reverse(); // Реверс массива данных

     return reversedData;
}
