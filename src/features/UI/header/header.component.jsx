import { Link } from 'react-router-dom'
import { StyledHeader } from './header.styles'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../users/users.slice'
import { Button } from '../../'
const Header = () => {
  const dispatch = useDispatch()
  const { authUser } = useSelector((state) => state.users)
  return (
    <StyledHeader>
      <Link to='/'>
        <img src='/public/images/slackoverload.png' alt='slackoverload' />
      </Link>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
      </ul>
      <div className='buttons-container'>
        {authUser ? (
          <>
            <p>{authUser.username}</p>
            <Button onClick={() => dispatch(logout())}>Log Out</Button>
          </>
        ) : (
          <>
            <Link to='/login'>
              <Button>Login</Button>
            </Link>
            <Link to='/signup'>
              <Button variant='inverted'>Signup</Button>
            </Link>
          </>
        )}
      </div>
    </StyledHeader>
  )
}
export default Header
