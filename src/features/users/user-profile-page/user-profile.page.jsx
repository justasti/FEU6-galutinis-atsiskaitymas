import { useParams } from 'react-router-dom'
import { useGetQuestionByUserIdQuery } from '../../questions/questions.api'
import { QuestionPreview, UserDescription } from '../../'
import { QuestionsContainer } from '../../questions/questions-list-page/questions-list.styles'
import { useGetUserByIdQuery } from '../users.api'
import { StyledUserProfile } from './user-profile.styles'
const UserProfilePage = () => {
  const { id } = useParams()
  const { data: userQuestions, isLoading: questionsLoading } =
    useGetQuestionByUserIdQuery(id)
  const { data: user, isLoading: userLoading } = useGetUserByIdQuery(id)
  if (questionsLoading || userLoading) return <p>Loading...</p>
  return (
    <StyledUserProfile>
      <UserDescription user={user} />
      <h2>
        {userQuestions.length} question{userQuestions.length > 1 && 's'} by{' '}
        {user.username}
      </h2>
      <QuestionsContainer>
        {userQuestions.map((q) => (
          <QuestionPreview key={q.id} question={q} />
        ))}
      </QuestionsContainer>
    </StyledUserProfile>
  )
}
export default UserProfilePage
