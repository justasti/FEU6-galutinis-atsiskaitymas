import { useState } from 'react'
import { useCreateNewUserMutation, useGetUsersQuery } from '../users.api'
import { Header } from '../../'
import { AuthMain } from '../../../layouts/auth-layout/auth-layout.styles'
import { nanoid } from '@reduxjs/toolkit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { login } from '../users.slice'
import { useDispatch } from 'react-redux'

const SignupPage = () => {
  const dispatch = useDispatch()
  const [inputs, setInputs] = useState({
    email: '',
    username: '',
    avatarUrl: '',
    password: '',
    confirm: '',
  })

  const [createUser, { isLoading }] = useCreateNewUserMutation()

  const { data: allUsers } = useGetUsersQuery()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const existingUser = allUsers.find((user) => user.email === inputs.email)
    if (existingUser) alert('existing!')
    else {
      const newUser = {
        ...inputs,
        avatarUrl: inputs.avatarUrl
          ? inputs.avatarUrl
          : `https://ui-avatars.com/api/?name=${inputs.username}&size=512&background=random&length=1&font-size=0.5&rounded=true&bold=true`,
        id: nanoid(),
      }
      delete newUser.confirm
      createUser(newUser)
      dispatch(login(newUser))
    }
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
            type='text'
            id='username'
            value={inputs.username}
            onChange={handleChange}
          />
          <input
            type='url'
            id='avatarUrl'
            value={inputs.avatarUrl}
            onChange={handleChange}
          />
          <input
            type='password'
            id='password'
            value={inputs.password}
            onChange={handleChange}
          />
          <input
            type='password'
            id='confirm'
            value={inputs.confirm}
            onChange={handleChange}
          />
          <button type='submit'>
            Signup {isLoading && <FontAwesomeIcon icon={faSpinner} />}
          </button>
        </form>
      </AuthMain>
    </>
  )
}
export default SignupPage
