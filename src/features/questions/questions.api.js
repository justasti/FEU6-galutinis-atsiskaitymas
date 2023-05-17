import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const questionsApi = createApi({
  reducerPath: 'questionsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/questions' }),
  tagTypes: ['Questions', 'Tags'],
  endpoints: builder => ({
    getQuestions: builder.query({
      query: () => '/',
      providesTags: ['Questions'],
      keepUnusedDataFor: 300
    }),
    getQuestionById: builder.query({
      query: (id) => `/${id}`,
      providesTags: ['Questions']
    }),
    getQuestionsTags: builder.query({
      query: () => '/',
      providesTags: ['Tags'],
      transformResponse: response => [...new Set(response.map(question => question.tag))].sort((a, b) => a.localeCompare(b))
    })
  })
})

export const { useGetQuestionsQuery, useGetQuestionByIdQuery, useGetQuestionsTagsQuery } = questionsApi
export default questionsApi