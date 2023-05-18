import { Link } from 'react-router-dom'
import { StyledHeader } from './header.styles'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../users/users.slice'
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
      <div className='buttons_container'>
        {authUser ? (
          <>
            <p>{authUser.username}</p>
            <button onClick={() => dispatch(logout())}>Log Out</button>
          </>
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
      </div>
    </StyledHeader>
  )
}
export default Header
