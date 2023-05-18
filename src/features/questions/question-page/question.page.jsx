import { useParams } from 'react-router-dom'
import { QuestionDetails, AnswersList } from '../../'

const QuestionPage = () => {
  const { id } = useParams()

  return (
    <>
      <QuestionDetails id={id} />
      <AnswersList id={id} />
    </>
  )
}
export default QuestionPage
