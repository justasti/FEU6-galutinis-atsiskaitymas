import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const questionsApiSlice = createApi({
  reducerPath: 'questionsApi',
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
export default questionsApiSlice