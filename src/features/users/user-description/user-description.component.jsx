import { StyledUserDescription } from './user-description.styles'

const UserDescription = ({ user }) => {
  return (
    <StyledUserDescription>
      <img src={user.avatarUrl} alt={user.username} />
      <h4>{user.username}</h4>
      <p>{user.email}</p>
    </StyledUserDescription>
  )
}
export default UserDescription
