import { useCreateNewUserMutation, useGetUsersQuery } from '../users.api'
import { Button, ErrorMessage, Header, Input, InputGroup } from '../../'
import { AuthMain } from '../../../layouts/auth-layout/auth-layout.styles'
import { nanoid } from '@reduxjs/toolkit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { login } from '../users.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { StyledForm } from './signup-page.styles'
import { useState } from 'react'

const SignupPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [existingUser, setExistingUser] = useState(false)
  const [createUser, { isLoading }] = useCreateNewUserMutation()
  const { data: allUsers } = useGetUsersQuery()

  const validationSchema = yup.object({
    email: yup
      .string()
      .required('Required field')
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        'Invalid email address'
      ),
    username: yup
      .string()
      .trim()
      .required('Required field')
      .max(15, 'Must be 15 characters or less'),
    avatarUrl: yup
      .string()
      .matches(
        /^(|https?:\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?)$/,
        'Invalid URL'
      ),
    password: yup
      .string()
      .trim()
      .required('Required field')
      .min(6, 'Must be at least 6 characters long'),
    confirm: yup
      .mixed()
      .required('Required field')
      .oneOf([yup.ref('password')], "Passwords doesn't match"),
  })

  const initialValues = {
    email: '',
    username: '',
    avatarUrl: '',
    password: '',
    confirm: '',
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const existingUser = allUsers.find((user) => user.email === values.email)
      if (existingUser) setExistingUser(true)
      else {
        const newUser = {
          ...values,
          avatarUrl: values.avatarUrl
            ? values.avatarUrl
            : `https://ui-avatars.com/api/?name=${values.username}&size=512&background=random&length=1&font-size=0.5&rounded=true&bold=true`,
          id: nanoid(),
        }
        delete newUser.confirm
        createUser(newUser)
        dispatch(login(newUser))
        navigate('/')
      }
    },
  })

  return (
    <>
      <Header />
      <AuthMain>
        <StyledForm onSubmit={formik.handleSubmit}>
          <InputGroup>
            <label
              className={formik.values.email ? 'filled' : null}
              htmlFor='email'
            >
              Email Address*
            </label>
            <Input
              type='email'
              id='email'
              name='email'
              onChange={(val) => {
                setExistingUser(false)
                formik.handleChange(val)
              }}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <ErrorMessage>{formik.errors.email}</ErrorMessage>
            )}
          </InputGroup>
          <InputGroup>
            <label
              className={formik.values.username ? 'filled' : null}
              htmlFor='username'
            >
              Username*
            </label>
            <Input
              type='text'
              id='username'
              {...formik.getFieldProps('username')}
            />
            {formik.touched.username && formik.errors.username && (
              <ErrorMessage>{formik.errors.username}</ErrorMessage>
            )}
          </InputGroup>
          <InputGroup>
            <label
              className={formik.values.avatarUrl ? 'filled' : null}
              htmlFor='avatarUrl'
            >
              Avatar URL
            </label>
            <Input
              type='url'
              id='avatarUrl'
              {...formik.getFieldProps('avatarUrl')}
            />
            {formik.touched.avatarUrl && formik.errors.avatarUrl && (
              <ErrorMessage>{formik.errors.avatarUrl}</ErrorMessage>
            )}
          </InputGroup>
          <InputGroup>
            <label
              className={formik.values.password ? 'filled' : null}
              htmlFor='password'
            >
              Password*
            </label>
            <Input
              type='password'
              id='password'
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password && (
              <ErrorMessage>{formik.errors.password}</ErrorMessage>
            )}
          </InputGroup>
          <InputGroup>
            <label
              className={formik.values.confirm ? 'filled' : null}
              htmlFor='confirm'
            >
              Confirm Password*
            </label>
            <Input
              type='password'
              id='confirm'
              {...formik.getFieldProps('confirm')}
            />
            {formik.touched.confirm && formik.errors.confirm && (
              <ErrorMessage>{formik.errors.confirm}</ErrorMessage>
            )}
          </InputGroup>
          <Button variant='inverted' type='submit'>
            Signup {isLoading && <FontAwesomeIcon icon={faSpinner} />}
          </Button>
          {existingUser && (
            <ErrorMessage pos='normal'>
              Account with email {formik.values.email} already exists
            </ErrorMessage>
          )}
        </StyledForm>
      </AuthMain>
    </>
  )
}
export default SignupPage
