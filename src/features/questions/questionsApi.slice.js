import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const questionsApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/questions' }),
  tagTypes: ['Questions'],
  endpoints: builder => ({
    getQuestions: builder.query({
      query: () => '/',
      providesTags: ['Questions']
    })
  })
})

export const { useGetQuestionsQuery } = questionsApiSlice