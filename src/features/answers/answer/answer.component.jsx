import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useGetUserByIdQuery } from '../../users/users.api'
import { AnswerContainer } from './answer.styles'
import {
  faCaretDown,
  faCaretUp,
  faPen,
  faPencilAlt,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import {
  useDeleteAnswerMutation,
  useUpdateAnswerMutation,
} from '../answers.api'
import DOMPurify from 'dompurify'

const Answer = ({ answer, onEditAnswer }) => {
  const navigate = useNavigate()
  const { data: answeredBy } = useGetUserByIdQuery(answer.userId)
  const { authUser } = useSelector((state) => state.users)
  const [deleteAnswer] = useDeleteAnswerMutation()
  const [updateAnswer] = useUpdateAnswerMutation()

  const parsedAnsweredDate = new Date(answer?.datePosted).toLocaleString(
    'lt-LT'
  )

  const parsedEditedDate =
    answer?.isEdited && new Date(answer.dateEdited).toLocaleString('lt-LT')

  const existingRating = answer?.ratings.find((r) => r.userId === authUser?.id)

  const rate = (rating) => {
    if (!authUser) {
      navigate('/login')
      return
    }
    let newRating
    if (existingRating && existingRating.rating === rating) {
      newRating = 0
    } else {
      newRating = rating
    }
    const updatedRating = { userId: authUser.id, rating: newRating }
    let updatedRatings = [...answer.ratings] || []
    if (existingRating) {
      updatedRatings = answer.ratings.map((rating) =>
        rating.userId === authUser.id ? updatedRating : rating
      )
    } else {
      updatedRatings.push(updatedRating)
    }
    const updatedAnswer = { ...answer, ratings: updatedRatings }
    updateAnswer(updatedAnswer)
  }

  const answerRatings = answer?.ratings.reduce((a, v) => a + v.rating, 0)
  return (
    <AnswerContainer>
      <div className='left'>
        <img src={answeredBy?.avatarUrl} alt={answeredBy?.username} />
        <div className='ratings'>
          <FontAwesomeIcon
            icon={faCaretUp}
            className={existingRating?.rating === 1 ? 'active' : undefined}
            onClick={() => rate(1)}
          />
          <span>{answerRatings}</span>
          <FontAwesomeIcon
            icon={faCaretDown}
            className={existingRating?.rating === -1 ? 'active' : undefined}
            onClick={() => rate(-1)}
          />
        </div>
      </div>
      <div className='right'>
        <p className='date-info'>
          Answered by{' '}
          <Link to={`/user/${answeredBy?.id}`}>{answeredBy?.username}</Link> on{' '}
          {parsedAnsweredDate}
          {parsedEditedDate && (
            <span className='edited-on'> | edited on {parsedEditedDate}</span>
          )}
        </p>
        {authUser?.id === answeredBy?.id && (
          <div className='actions'>
            <span
              onClick={() => {
                deleteAnswer(answer.id)
                navigate('/')
              }}
            >
              <FontAwesomeIcon icon={faTrash} /> Delete
            </span>
            <span onClick={() => onEditAnswer(answer)}>
              <FontAwesomeIcon icon={faPencilAlt} /> Edit
            </span>
          </div>
        )}
        <div
          className='answer-content'
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(answer.content),
          }}
        ></div>
      </div>
      {/* <div className='ratings'>
        <FontAwesomeIcon
          icon={faCaretUp}
          style={{ color: existingRating?.rating === 1 ? '#f00' : '333' }}
          onClick={() => rate(1)}
        />
        <span>{answerRatings}</span>
        <FontAwesomeIcon
          icon={faCaretDown}
          style={{ color: existingRating?.rating === -1 ? '#f00' : '333' }}
          onClick={() => rate(-1)}
        />
      </div>
      <div className='answer-content'>
        <p
          data-answer-id={answer.id}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(answer.content),
          }}
        ></p>
        {answer.isEdited && (
          <div className='date-info'>
            {parsedEditedDate && (
              <p>
                <FontAwesomeIcon icon={faPen} /> edited {parsedEditedDate}
              </p>
            )}
          </div>
        )}
      </div>
      <div>
        <div className='author-info'>
          <p>answered {parsedAskedDate}</p>
          <div>
            <img src={answeredBy?.avatarUrl} alt={answeredBy?.username} />
            <p>
              by{' '}
              <strong>
                <Link to={`/user/${answeredBy?.id}`}>
                  {answeredBy?.username}
                </Link>
              </strong>
            </p>
          </div>
        </div>
        <div className='actions'>
          {authUser?.id === answeredBy?.id && (
            <>
              <p className='remove' onClick={() => deleteAnswer(answer.id)}>
                <FontAwesomeIcon icon={faTrashAlt} />
                Remove Answer
              </p>
              <p className='edit' onClick={() => onEditAnswer(answer)}>
                <FontAwesomeIcon icon={faPencilAlt} />
                Edit Answer
              </p>
            </>
          )}
        </div>
      </div> */}
    </AnswerContainer>
  )
}
export default Answer
