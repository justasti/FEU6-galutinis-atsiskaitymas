import { Link } from 'react-router-dom'
import { StyledHeader } from './header.styles'
import { useSelector } from 'react-redux'
const Header = () => {
  const { authUser } = useSelector((state) => state.users)
  return (
    <StyledHeader>
      {authUser ? (
        <p>{authUser.username}</p>
      ) : (
        <>
          <Link to='/login'>
            <button>Login</button>
          </Link>
          <Link to='/signup'>
            <button>Signup</button>
          </Link>
        </>
      )}
    </StyledHeader>
  )
}
export default Header
