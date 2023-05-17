import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const questionsApi = createApi({
  reducerPath: 'questionsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/questions' }),
  tagTypes: ['Answers'],
  endpoints: builder => ({
    getQuestions: builder.query({
      query: () => '/',
      providesTags: ['Questions']
    })
  })
})

export const { useGetQuestionsQuery } = questionsApi
export default questionsApi