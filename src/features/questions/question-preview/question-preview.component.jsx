import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useGetAnswersByQuestionIdQuery } from '../../answers/answers.api'
import { useGetUserByIdQuery } from '../../users/users.api'
import { formatDistanceToNow } from 'date-fns'
import { faComment, faStar } from '@fortawesome/free-regular-svg-icons'
import { StyledQuestionPreview } from './question-preview.styles'

const QuestionPreview = ({ question }) => {
  const { data: answers, isLoading: answerIsLoading } =
    useGetAnswersByQuestionIdQuery(question.id)
  const { data: askedBy, isLoading: userIsLoading } = useGetUserByIdQuery(
    question.userId
  )
  const dateDifference = formatDistanceToNow(new Date(question.datePosted), {
    addSuffix: true,
    includeSeconds: true,
  })
  return (
    <StyledQuestionPreview>
      <img src={askedBy?.avatarUrl} alt={askedBy?.username} />
      <div className='question-info'>
        <h3>{question.title}</h3>
        <p>
          by <strong>{askedBy?.username}</strong> {dateDifference}
        </p>
      </div>
      <span className='question-tag'>{question.tag}</span>
      <div className='question-stats'>
        <span>
          <FontAwesomeIcon icon={faComment} />
          {answerIsLoading ? 0 : answers.length}
        </span>
        <span>
          <FontAwesomeIcon icon={faStar} />
          {question.ratings.length}
        </span>
      </div>
    </StyledQuestionPreview>
  )
}
export default QuestionPreview
