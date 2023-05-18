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
    createNewUser: builder.mutation({
      query: (user) => ({
        url: '/',
        method: 'POST',
        body: user
      }),
      invalidatesTags: ['Users']
    })
  })
})

export const { useGetUsersQuery, useGetUserByIdQuery, useCreateNewUserMutation } = usersApi
export default usersApi