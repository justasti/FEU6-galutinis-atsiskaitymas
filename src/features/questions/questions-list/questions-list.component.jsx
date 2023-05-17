import { useGetQuestionsQuery } from '../questionsApi.slice'

const QuestionsList = () => {
  const {
    data: questions,
    isLoading,
    isSuccess,
    isError,
  } = useGetQuestionsQuery()
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isSuccess &&
        questions.map((question) => (
          <div key={question.id}>{question.title}</div>
        ))}
      {isError && <p>Error fetching data!</p>}
    </div>
  )
}
export default QuestionsList
