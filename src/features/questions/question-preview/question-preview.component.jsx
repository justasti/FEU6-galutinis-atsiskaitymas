import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useGetAnswersByQuestionIdQuery } from '../../answers/answers.api'
import { useGetUserByIdQuery } from '../../users/users.api'
import { formatDistanceToNow } from 'date-fns'
import { faComment, faStar } from '@fortawesome/free-regular-svg-icons'
import { StyledQuestionPreview } from './question-preview.styles'
import { Link } from 'react-router-dom'
import { QuestionTag } from '../../'

const QuestionPreview = ({ question, answers }) => {
  const { data: askedBy } = useGetUserByIdQuery(question.userId)
  const dateDifference = formatDistanceToNow(new Date(question.datePosted), {
    addSuffix: true,
    includeSeconds: true,
  })
  return (
    <StyledQuestionPreview>
      <img src={askedBy?.avatarUrl} alt={askedBy?.username} />
      <div className='question-info'>
        <h3>
          <Link to={`/questions/${question.id}`}>{question.title}</Link>
        </h3>
        <p>
          by{' '}
          <strong>
            <Link to={`/user/${askedBy?.id}`}>{askedBy?.username}</Link>
          </strong>{' '}
          {dateDifference}
        </p>
      </div>
      <QuestionTag tag={question.tag} />
      <div className='question-stats'>
        <span>
          <FontAwesomeIcon icon={faComment} />
          {answers?.length}
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
