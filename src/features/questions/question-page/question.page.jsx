import { useParams } from 'react-router-dom'
import { QuestionDetails, AnswersList } from '../../'

const QuestionPage = () => {
  const { id } = useParams()

  return (
    <div>
      <QuestionDetails id={id} />
      <AnswersList id={id} />
    </div>
  )
}
export default QuestionPage
