import { useSearchParams } from 'react-router-dom'
import { QuestionPreview } from '../..'
import { useGetQuestionsQuery } from '../questions.api'
import { QuestionsContainer } from './questions-list.styles'
import { useState, useEffect } from 'react'
import { useGetAnswersQuery } from '../../answers/answers.api'

const QuestionsList = () => {
  const [sort, setSort] = useState('date')
  const [filter, setFilter] = useState(null)
  const [order, setOrder] = useState('desc')
  const [params, setParams] = useSearchParams()
  const {
    data: questions,
    isLoading: questionsLoading,
    isError,
  } = useGetQuestionsQuery()
  const { data: answers, isLoading: answersLoading } = useGetAnswersQuery()

  useEffect(() => {
    const sortParam = params.get('sort') || 'date'
    const orderParam = params.get('order') || 'desc'
    setSort(sortParam)
    setOrder(orderParam)
  }, [params])

  if (isError) return <h2>Error loading posts!</h2>
  if (questionsLoading || answersLoading) return <p>Loading...</p>

  let filteredQuestions = [...questions]
  if (sort || filter) {
    if (sort === 'date') {
      filteredQuestions = filteredQuestions.sort((a, b) =>
        order === 'desc'
          ? b.datePosted.localeCompare(a.datePosted)
          : a.datePosted.localeCompare(b.datePosted)
      )
    } else if (sort === 'rating') {
      filteredQuestions = filteredQuestions.sort((a, b) => {
        const ratingA = a.ratings.reduce((a, v) => a + v.rating || 0, 0)
        const ratingB = b.ratings.reduce((a, v) => a + v.rating || 0, 0)
        return order === 'desc' ? ratingB - ratingA : ratingA - ratingB
      })
    } else if (sort === 'answers') {
      filteredQuestions = filteredQuestions.sort((a, b) => {
        const answersA = answers.filter(
          (answer) => answer.questionId === a.id
        ).length
        const answersB = answers.filter(
          (answer) => answer.questionId === b.id
        ).length

        return order === 'desc' ? answersB - answersA : answersA - answersB
      })
    }
    if (filter === 'answered') {
      filteredQuestions = filteredQuestions.filter((question) => {
        return answers.filter((answer) => answer.questionId === question.id)
          .length
      })
    } else if (filter === 'unanswered') {
      filteredQuestions = filteredQuestions.filter((question) => {
        return !answers.filter((answer) => answer.questionId === question.id)
          .length
      })
    }
  }

  return (
    <>
      <div className='filters'>
        <div className='sort-type'>
          <p>Sort by: </p>
          <span
            onClick={() =>
              setParams({
                sort: 'date',
                order: order === 'asc' ? 'desc' : 'asc',
              })
            }
          >
            Date
          </span>
          <span
            onClick={() =>
              setParams({
                sort: 'rating',
                order: order === 'asc' ? 'desc' : 'asc',
              })
            }
          >
            Rating
          </span>
          <span
            onClick={() =>
              setParams({
                sort: 'answers',
                order: order === 'asc' ? 'desc' : 'asc',
              })
            }
          >
            Answers
          </span>
        </div>
        <div className='filter-type'>
          <p>Filter:</p>
          <span
            onClick={() => {
              setFilter(null)
            }}
          >
            All
          </span>
          <span
            onClick={() => {
              setFilter('answered')
            }}
          >
            Answered
          </span>
          <span
            onClick={() => {
              setFilter('unanswered')
            }}
          >
            Unanswered
          </span>
        </div>
      </div>
      <QuestionsContainer>
        {filteredQuestions.map((question) => {
          const answersForQuestion = [...answers].filter(
            (answer) => answer.questionId === question.id
          )
          return (
            <QuestionPreview
              question={question}
              answers={answersForQuestion}
              key={question.id}
            />
          )
        })}
      </QuestionsContainer>
    </>
  )
}
export default QuestionsList
