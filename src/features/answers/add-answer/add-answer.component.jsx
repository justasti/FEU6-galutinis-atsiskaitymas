import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { usePostAnswerMutation, useUpdateAnswerMutation } from '../answers.api'
import { nanoid } from '@reduxjs/toolkit'
import { NewAnswerForm } from './add-answer.styles'

const AddAnswer = ({ answerToEdit, onAnswerEdited, questionId }) => {
  const [answer, setAnswer] = useState('')
  const [editedAnswer, setEditedAnswer] = useState('')
  const [postAnswer] = usePostAnswerMutation()
  const [updateAnswer] = useUpdateAnswerMutation()
  const { authUser } = useSelector((state) => state.users)

  if (answerToEdit) {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }

  useEffect(() => {
    setEditedAnswer(answerToEdit?.content)
  }, [answerToEdit])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (answerToEdit) {
      const updatedAnswer = {
        ...answerToEdit,
        content: editedAnswer,
        isEdited: true,
        dateEdited: new Date().toISOString(),
      }
      const answerParagraph = document.querySelector(
        `[data-answer-id=${answerToEdit.id}]`
      )
      answerParagraph.scrollIntoView({ behavior: 'smooth' })

      updateAnswer(updatedAnswer)
      onAnswerEdited()
    } else {
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
      }
    }
    setAnswer('')
    setEditedAnswer('')
  }
  if (!authUser)
    return (
      <h3 className='login-to'>
        <Link to='/login'>Login</Link> to post answers!
      </h3>
    )
  return (
    <NewAnswerForm onSubmit={handleSubmit}>
      {answerToEdit ? (
        <textarea
          id='answer'
          value={editedAnswer}
          onChange={(e) => setEditedAnswer(e.target.value)}
        ></textarea>
      ) : (
        <textarea
          id='answer'
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        ></textarea>
      )}
      <input type='submit' value='Submit' />
    </NewAnswerForm>
  )
}
export default AddAnswer
