import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://live.devnimble.com/api/v1';

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
      query: () => ({
        url: '/contacts',
        params: { sort: 'created:desc' }
      }),
      providesTags: ['contacts']
    }),
    getOneContact: builder.query({
      query: (id) => `/contact/${id}`,
      providesTags: ['one-contact']
    }),
    createContact: builder.mutation({
      query: (data) => ({
        url: '/contact',
        body: data,
        method: 'POST'
      }),
      invalidatesTags: ['contacts']
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contact/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['contacts']
    }),
    addTag: builder.mutation({
      query: ({ id, data }) => ({
        url: `/contacts/${id}/tags`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: ['one-contact', 'contacts']
    })
  })
});

export const {
  useGetAllContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
  useGetOneContactQuery,
  useAddTagMutation
} = contactApi;
