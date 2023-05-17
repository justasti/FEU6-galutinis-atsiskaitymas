import { QuestionPreview } from '../../'
import { useGetQuestionsQuery } from '../questionsApi'
import { QuestionsContainer } from './questions-list.styles'

const QuestionsList = () => {
  const {
    data: questions,
    isLoading,
    isSuccess,
    isError,
  } = useGetQuestionsQuery()
  return (
    <QuestionsContainer>
      {isLoading && <p>Loading...</p>}
      {isSuccess &&
        questions.map((question) => (
          <QuestionPreview question={question} key={question.id} />
        ))}
      {isError && <p>Error fetching data!</p>}
    </QuestionsContainer>
  )
}
export default QuestionsList
