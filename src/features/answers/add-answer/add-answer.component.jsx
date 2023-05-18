import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { usePostAnswerMutation } from '../answers.api'
import { nanoid } from '@reduxjs/toolkit'
import { NewAnswerForm } from './add-answer.styles'

const AddAnswer = ({ questionId }) => {
  const [answer, setAnswer] = useState('')
  const [postAnswer] = usePostAnswerMutation()
  const { authUser } = useSelector((state) => state.users)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (answer.trim()) {
      const newAnswer = {
        id: nanoid(),
        userId: authUser.id,
        questionId: questionId,
        content: answer,
        datePosted: new Date().toISOString(),
        isEdited: false,
        ratings: [],
      }
      postAnswer(newAnswer)
      setAnswer('')
    }
  }
  if (!authUser)
    return (
      <h3 className='login-to'>
        <Link to='/login'>Login</Link> to post answers!
      </h3>
    )
  return (
    <NewAnswerForm onSubmit={handleSubmit}>
      <textarea
        id='answer'
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      ></textarea>
      <input type='submit' value='Submit' />
    </NewAnswerForm>
  )
}
export default AddAnswer
