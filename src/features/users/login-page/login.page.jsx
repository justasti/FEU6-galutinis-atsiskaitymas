import { useState } from 'react'
import { Header, Input, InputGroup, Button, ErrorMessage } from '../../'
import { AuthMain } from '../../../layouts/auth-layout/auth-layout.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { getUserByEmail, login } from '../users.slice'
import { useNavigate } from 'react-router-dom'
import { StyledForm } from '../signup-page/signup-page.styles'
import { useFormik } from 'formik'
import * as yup from 'yup'

const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [invalidAttempt, setInvalidAttempt] = useState(false)
  const { loading } = useSelector((state) => state.users)

  const validationSchema = yup.object({
    email: yup
      .string()
      .required('Required field')
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        'Invalid email address'
      ),
    password: yup.string().trim().required('Required field'),
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
      const userPromise = dispatch(getUserByEmail(values.email))
      userPromise.then(({ payload }) => {
        const user = payload[0]
        if (user?.password === values.password) {
          dispatch(login(user))
          navigate(-1)
        } else {
          setInvalidAttempt(true)
        }
      })
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
              value={formik.values.email}
              onChange={(val) => {
                setInvalidAttempt(false)
                formik.handleChange(val)
              }}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <ErrorMessage>{formik.errors.email}</ErrorMessage>
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
              value={formik.values.password}
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password && (
              <ErrorMessage>{formik.errors.password}</ErrorMessage>
            )}
          </InputGroup>
          <Button variant='inverted' type='submit'>
            Login {loading && <FontAwesomeIcon icon={faSpinner} />}
          </Button>
          {invalidAttempt && (
            <ErrorMessage pos='normal'>
              Incorrect Email or Password
            </ErrorMessage>
          )}
        </StyledForm>
      </AuthMain>
    </>
  )
}
export default LoginPage
