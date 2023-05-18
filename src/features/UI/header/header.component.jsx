import { Link } from 'react-router-dom'
import { StyledHeader } from './header.styles'
const Header = () => {
  return (
    <StyledHeader>
      <Link to='/login'>
        <button>Login</button>
      </Link>
    </StyledHeader>
  )
}
export default Header
