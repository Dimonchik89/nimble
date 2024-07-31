import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = '/api/v1/contacts?sort=created:desc';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      headers.set('Authorization', `Bearer ${import.meta.env.VITE_APP_AUTHORIZATION_TOKEN}`);
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getAllContacts: builder.query({
      query: () => ''
    })
  })
});

export const { useGetAllContactsQuery } = contactApi;
