import {
  useDeleteQuestionMutation,
  useGetQuestionByIdQuery,
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

  const { data: askedBy } = useGetUserByIdQuery(
    detailedQuestion?.userId ?? skipToken
  )

  const askedDateDifference =
    isSuccess &&
    formatDistanceToNow(new Date(detailedQuestion?.datePosted), {
      addSuffix: true,
      includeSeconds: true,
    })

  const parsedAskedDate = new Date(detailedQuestion?.datePosted).toLocaleString(
    'lt-LT'
  )

  const parsedEditedDate =
    detailedQuestion?.isEdited &&
    new Date(detailedQuestion.dateEdited).toLocaleString('lt-LT')

  return (
    <>
      {questionIsLoading && <p>Loading...</p>}
      {isSuccess && (
        <DetailedQuestionContainer>
          <h2>{detailedQuestion.title}</h2>
          <div className='top-row'>
            <div className='date-info'>
              <p>Asked {askedDateDifference}</p>
              {parsedEditedDate && <p>Edited {parsedEditedDate}</p>}
            </div>
            {authUser?.id === askedBy?.id && (
              <div className='actions'>
                <span
                  onClick={() => {
                    deleteQuestion(detailedQuestion.id)
                    navigate('/')
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </span>
                <span onClick={() => navigate('edit')}>
                  <FontAwesomeIcon icon={faPencilAlt} />
                </span>
              </div>
            )}
          </div>
          <div className='question-info'>
            <div className='ratings'>
              <FontAwesomeIcon icon={faCaretUp} />
              <span>0</span>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            <div className='question-content'>
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(detailedQuestion.content),
                }}
              >
                {}
              </p>
              <QuestionTag tag={detailedQuestion.tag} />
            </div>
            <div className='author-info'>
              <p>asked {parsedAskedDate}</p>
              <div>
                <img src={askedBy?.avatarUrl} alt={askedBy?.username} />
                <p>
                  by{' '}
                  <strong>
                    <Link to={`/user/${askedBy?.id}`}>{askedBy?.username}</Link>
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </DetailedQuestionContainer>
      )}
    </>
  )
}
export default QuestionDetails
