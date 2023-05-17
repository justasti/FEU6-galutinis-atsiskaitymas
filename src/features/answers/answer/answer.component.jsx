import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useGetUserByIdQuery } from '../../users/users.api'
import { AnswerContainer } from './answer.styles'
import {
  faCaretDown,
  faCaretUp,
  faPen,
} from '@fortawesome/free-solid-svg-icons'
import { formatDistanceToNow } from 'date-fns'

const Answer = ({ answer }) => {
  const { data: answeredBy, isSuccess } = useGetUserByIdQuery(answer.userId)
  const askedDateDifference =
    isSuccess &&
    formatDistanceToNow(new Date(answer?.datePosted), {
      addSuffix: true,
      includeSeconds: true,
    })

  const parsedAskedDate = new Date(answer?.datePosted).toLocaleString('lt-LT')

  const parsedEditedDate =
    answer?.isEdited && new Date(answer.dateEdited).toLocaleString('lt-LT')
  return (
    <AnswerContainer>
      <h2>{answer.title}</h2>
      <div className='answer-info'>
        <div className='ratings'>
          <FontAwesomeIcon icon={faCaretUp} />
          <span>0</span>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        <div className='answer-content'>
          <p>{answer.content}</p>
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
        <div className='author-info'>
          <p>answered {parsedAskedDate}</p>
          <div>
            <img src={answeredBy?.avatarUrl} alt={answeredBy?.username} />
            <p>
              by <strong>{answeredBy?.username}</strong>
            </p>
          </div>
        </div>
      </div>
    </AnswerContainer>
  )
}
export default Answer
