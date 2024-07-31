import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = '/api/v1';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      headers.set('Authorization', `Bearer ${import.meta.env.VITE_APP_AUTHORIZATION_TOKEN}`);
      headers.set('X-Nimble-Token', `${import.meta.env.VITE_APP_AUTHORIZATION_TOKEN}`);
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getAllContacts: builder.query({
      query: () => ({
        url: '/contacts',
        params: { sort: 'created:desc' }
      }),
      providesTags: ['contact']
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contact/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['contact']
    })
  })
});

export const { useGetAllContactsQuery, useDeleteContactMutation } = contactApi;
