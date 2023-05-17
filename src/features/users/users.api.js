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
    })
  })
})

export const { useGetUsersQuery, useGetUserByIdQuery } = usersApi
export default usersApi