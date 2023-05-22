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
    getQuestionByUserId: builder.query({
      query: (id) => `?userId=${id}`,
      providesTags: ['Questions']
    }),
    getQuestionsTags: builder.query({
      query: () => '/',
      providesTags: ['Tags'],
      transformResponse: response => [...new Set(response.map(question => question.tag))].sort((a, b) => a.localeCompare(b))
    }),
    addNewQuestion: builder.mutation({
      query: (question) => ({
        url: '/',
        method: 'POST',
        body: question
      }),
      invalidatesTags: ['Questions', 'Tags']
    }),
    updateQuestion: builder.mutation({
      query: question => ({
        url: `/${question.id}`,
        method: 'PATCH',
        body: question
      }),
      invalidatesTags: ['Questions', 'Tags']
    }),
    deleteQuestion: builder.mutation({
      query: id => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Questions', 'Tags']
    }),
  })
})

export const { useGetQuestionsQuery, useGetQuestionByIdQuery, useGetQuestionsTagsQuery, useGetQuestionByUserIdQuery, useAddNewQuestionMutation, useUpdateQuestionMutation, useDeleteQuestionMutation, } = questionsApi
export default questionsApi