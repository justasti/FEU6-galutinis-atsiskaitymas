import { useState } from 'react'
import { Header } from '../../'
import { AuthMain } from './../../../layouts/auth-layout/auth-layout.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { getUserByEmail, login } from '../users.slice'
import { useNavigate } from 'react-router-dom'
const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  })
  const { loading } = useSelector((state) => state.users)
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const userPromise = dispatch(getUserByEmail(inputs.email))
    userPromise.then(({ payload }) => {
      const user = payload[0]
      if (user?.password === inputs.password) {
        dispatch(login(user))
        navigate('/')
      } else {
        console.log('incorrect')
      }
    })
  }

  return (
    <>
      <Header />
      <AuthMain>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            id='email'
            value={inputs.email}
            onChange={handleChange}
          />
          <input
            type='password'
            id='password'
            value={inputs.password}
            onChange={handleChange}
          />
          <button type='submit'>
            Login {loading && <FontAwesomeIcon icon={faSpinner} />}
          </button>
        </form>
      </AuthMain>
    </>
  )
}
export default LoginPage
