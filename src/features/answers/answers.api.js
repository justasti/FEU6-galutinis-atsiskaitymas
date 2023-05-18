import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const answersApi = createApi({
  reducerPath: 'answersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/answers' }),
  tagTypes: ['Answers'],
  endpoints: builder => ({
    getAnswers: builder.query({
      query: () => '/',
      providesTags: ['Answers']
    }),
    getAnswersByQuestionId: builder.query({
      query: (id) => `?questionId=${id}`,
      providesTags: ['Answers']
    }),
    postAnswer: builder.mutation({
      query: (answer) => ({
        url: '/',
        method: 'POST',
        body: answer
      }),
      invalidatesTags: ['Answers']
    })
  })
})

export const { useGetAnswersQuery, useGetAnswersByQuestionIdQuery, usePostAnswerMutation } = answersApi
export default answersApi