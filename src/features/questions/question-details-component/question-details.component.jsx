import {
  useDeleteQuestionMutation,
  useGetQuestionByIdQuery,
  useUpdateQuestionMutation,
} from '../questions.api'
import { formatDistanceToNow } from 'date-fns'
import { DetailedQuestionContainer } from './question-details.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCaretUp,
  faCaretDown,
  faTrash,
  faPencilAlt,
} from '@fortawesome/free-solid-svg-icons'
import { useGetUserByIdQuery } from '../../users/users.api'
import { skipToken } from '@reduxjs/toolkit/dist/query'
import { Link, useNavigate } from 'react-router-dom'
import { QuestionTag } from '../../'
import DOMPurify from 'dompurify'
import { useSelector } from 'react-redux'

const QuestionDetails = ({ id }) => {
  const navigate = useNavigate()
  const { authUser } = useSelector((state) => state.users)
  const {
    data: detailedQuestion,
    isLoading: questionIsLoading,
    isSuccess,
  } = useGetQuestionByIdQuery(id)
  const [deleteQuestion] = useDeleteQuestionMutation()
  const [updateQuestion] = useUpdateQuestionMutation()

  const { data: askedBy } = useGetUserByIdQuery(
    detailedQuestion?.userId ?? skipToken
  )
  const existingRating = detailedQuestion?.ratings.find(
    (r) => r.userId === authUser?.id
  )

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
    let updatedRatings = [...detailedQuestion.ratings] || []
    if (existingRating) {
      updatedRatings = detailedQuestion.ratings.map((rating) =>
        rating.userId === authUser.id ? updatedRating : rating
      )
    } else {
      updatedRatings.push(updatedRating)
    }
    const updatedQuestion = { ...detailedQuestion, ratings: updatedRatings }
    updateQuestion(updatedQuestion)
  }

  const questionRatings = detailedQuestion?.ratings.reduce(
    (a, v) => a + v.rating,
    0
  )

  const askedDateDifference =
    isSuccess &&
    formatDistanceToNow(new Date(detailedQuestion?.datePosted), {
      addSuffix: true,
      includeSeconds: true,
    })

  const parsedEditedDate =
    detailedQuestion?.isEdited &&
    new Date(detailedQuestion.dateEdited).toLocaleString('lt-LT')

  if (questionIsLoading) return <p>Loading...</p>

  return (
    <>
      <DetailedQuestionContainer>
        <div className='left'>
          <img src={askedBy?.avatarUrl} alt={askedBy?.username} />
          <div className='ratings'>
            <FontAwesomeIcon
              icon={faCaretUp}
              className={existingRating?.rating === 1 ? 'active' : undefined}
              onClick={() => rate(1)}
            />
            <span>{questionRatings}</span>
            <FontAwesomeIcon
              icon={faCaretDown}
              className={existingRating?.rating === -1 ? 'active' : undefined}
              onClick={() => rate(-1)}
            />
          </div>
        </div>
        <div className='right'>
          <h2 className='title'>{detailedQuestion.title}</h2>
          <p className='date-info'>
            Asked by{' '}
            <Link to={`/user/${askedBy?.id}`}>{askedBy?.username}</Link>{' '}
            {askedDateDifference}
            {parsedEditedDate && (
              <span className='edited-on'> | edited on {parsedEditedDate}</span>
            )}
          </p>
          <QuestionTag tag={detailedQuestion.tag} />
          {authUser?.id === askedBy?.id && (
            <div className='actions'>
              <span
                onClick={() => {
                  deleteQuestion(detailedQuestion.id)
                  navigate('/')
                }}
              >
                <FontAwesomeIcon icon={faTrash} /> Delete
              </span>
              <span onClick={() => navigate('edit')}>
                <FontAwesomeIcon icon={faPencilAlt} /> Edit
              </span>
            </div>
          )}
          <div
            className='question-content'
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(detailedQuestion.content),
            }}
          ></div>
        </div>
      </DetailedQuestionContainer>
    </>
  )
}
export default QuestionDetails
