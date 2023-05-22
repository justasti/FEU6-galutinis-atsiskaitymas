import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
  const questionRatings = question.ratings.reduce((a, v) => a + v.rating, 0)
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
          {answers?.length || 0}
        </span>
        <span>
          <FontAwesomeIcon icon={faStar} />
          {questionRatings}
        </span>
      </div>
    </StyledQuestionPreview>
  )
}
export default QuestionPreview
