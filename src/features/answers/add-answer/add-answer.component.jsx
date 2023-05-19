import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { usePostAnswerMutation, useUpdateAnswerMutation } from '../answers.api'
import { nanoid } from '@reduxjs/toolkit'
import { NewAnswerForm } from './add-answer.styles'
import ReactQuill from 'react-quill'
import { Button } from '../../'
import 'react-quill/dist/quill.snow.css'

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
        `[data-answer-id="${answerToEdit.id}"]`
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
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link'],
      ['clean'],
    ],
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
        <ReactQuill
          theme='snow'
          modules={modules}
          value={editedAnswer}
          onChange={setEditedAnswer}
        />
      ) : (
        <ReactQuill
          theme='snow'
          modules={modules}
          value={answer}
          onChange={setAnswer}
        />
      )}
      <Button>POST ANSWER</Button>
    </NewAnswerForm>
  )
}
export default AddAnswer
