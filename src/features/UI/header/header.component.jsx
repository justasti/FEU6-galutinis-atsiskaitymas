import { Link, useNavigate } from 'react-router-dom'
import { StyledHeader } from './header.styles'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../users/users.slice'
import { Button } from '../../'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [searchPhrase, setSearchPhrase] = useState('')
  const { authUser } = useSelector((state) => state.users)
  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`/questions/search?q=${searchPhrase}`)
    setSearchPhrase('')
  }

  return (
    <StyledHeader>
      <Link to='/'>
        <img src='/public/images/slackoverload.png' alt='slackoverload' />
      </Link>
      <form className='search' onSubmit={handleSearch}>
        <input
          type='text'
          id='search-bar'
          value={searchPhrase}
          onChange={(e) => setSearchPhrase(e.target.value)}
        />
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
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
