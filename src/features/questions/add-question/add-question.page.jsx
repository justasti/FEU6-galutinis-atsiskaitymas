import { Button, ErrorMessage, Input } from '../../'
import CreatableSelect from 'react-select/creatable'
import { StyledQuestionForm } from './add-question-page.styles'
import {
  useAddNewQuestionMutation,
  useGetQuestionsTagsQuery,
  useGetQuestionsQuery,
  useEditQuestionMutation,
} from '../questions.api'
import { useState, useEffect } from 'react'
import ReactQuill from 'react-quill'
import { nanoid } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'

const AddQuestionPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [addQuestion] = useAddNewQuestionMutation()
  const [editQuestion] = useEditQuestionMutation()
  const { data: tags, isLoading } = useGetQuestionsTagsQuery()
  const { authUser } = useSelector((state) => state.users)
  const [tag, setTag] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [errorSubmitting, setErrorSubmitting] = useState(false)
  const [existingQuestion, setExistingQuestion] = useState(null)
  const { data: questions, isLoading: questionsLoading } =
    useGetQuestionsQuery()

  useEffect(() => {
    if (id) {
      const question = questions?.find((q) => q.id === id)
      if (question) {
        if (question.userId !== authUser?.id) {
          navigate(`/questions/${id}`)
          return
        }
        setTag({ label: question.tag, value: question.tag })
        setTitle(question.title)
        setContent(question.content)
        setExistingQuestion(question)
      }
    }
  }, [questions])

  if (isLoading || questionsLoading) return <p>Loading...</p>

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      background: state.isSelected
        ? '#ffba70'
        : state.isFocused
        ? '#fedbb5'
        : '#fff',
      color: state.isSelected ? '#fff' : '#000000',
    }),
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

  const selectOptions = tags.map((tag) => ({ label: tag, value: tag }))

  const handleSelectChange = (value) => {
    setErrorSubmitting(false)
    setTag(value)
  }

  const handleTitleChange = (e) => {
    setErrorSubmitting(false)
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title || !tag || !content) {
      setErrorSubmitting(true)
      return
    }
    const newId = nanoid()
    if (id) {
      const updatedQuestion = {
        ...existingQuestion,
        title,
        content,
        tag: tag.value,
        isEdited: true,
        dateEdited: new Date().toISOString(),
      }
      editQuestion(updatedQuestion)
    } else {
      const newQuestion = {
        id: newId,
        title,
        content,
        tag: tag.value,
        userId: authUser.id,
        datePosted: new Date().toISOString(),
        isEdited: false,
        ratings: [],
      }
      addQuestion(newQuestion)
    }
    navigate(`/questions/${id || newId}`)
  }

  return (
    <StyledQuestionForm onSubmit={handleSubmit}>
      <div className='group'>
        <label htmlFor='title'>Question Title</label>
        <Input onChange={handleTitleChange} value={title} id='title' />
        {errorSubmitting && !title && (
          <ErrorMessage pos='normal'>Required field</ErrorMessage>
        )}
      </div>
      <div className='group'>
        <label htmlFor='react-select-2-input'>Choose a Tag</label>
        <CreatableSelect
          id='tag'
          placeholder='Select tag from list or start typing to create new...'
          isClearable
          options={selectOptions}
          onChange={handleSelectChange}
          value={tag}
          styles={customStyles}
        />
        {errorSubmitting && !tag && (
          <ErrorMessage pos='normal'>Select a Tag</ErrorMessage>
        )}
      </div>
      <div className='group'>
        <label htmlFor='content'>Describe Your Issue</label>
        <ReactQuill
          theme='snow'
          modules={modules}
          value={content}
          onChange={setContent}
        />
        {errorSubmitting && !content && (
          <ErrorMessage pos='normal' style={{ marginTop: '15px' }}>
            Required field
          </ErrorMessage>
        )}
      </div>
      <Button>{id ? 'Update' : 'Create'} Question</Button>
    </StyledQuestionForm>
  )
}
export default AddQuestionPage
