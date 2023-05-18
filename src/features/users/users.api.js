import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/users' }),
  tagTypes: ['Users'],
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => '/',
      providesTags: ['Users']
    }),
    getUserById: builder.query({
      query: (id) => `/${id}`,
      providesTags: ['Users']
    }),
    getUserByEmail: builder.query({
      query: (email) => `?email=${email}`,
      providesTags: ['Users'],
      transformResponse: response => response[0]
    })
  })
})

export const { useGetUsersQuery, useGetUserByIdQuery, useGetUserByEmailQuery } = usersApi
export default usersApi