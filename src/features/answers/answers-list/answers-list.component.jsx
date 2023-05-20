import { useState } from 'react'
import { Answer, AddAnswer } from '../../'
import { useGetAnswersByQuestionIdQuery } from '../answers.api'

const AnswersList = ({ id }) => {
  const { data: answers, isLoading } = useGetAnswersByQuestionIdQuery(id)
  const [answerToEdit, setAnswerToEdit] = useState(null)

  const editAnswer = (answer) => {
    setAnswerToEdit(answer)
  }

  const handleEditAnswer = () => {
    setAnswerToEdit(null)
  }

  if (isLoading) return <p>Loading...</p>

  if (!answers.length)
    return (
      <>
        <h2 style={{ marginBlock: 30 }}>No answers yet</h2>
        <AddAnswer questionId={id} />
      </>
    )

  return (
    <>
      <h2>
        {answers.length} answer{answers.length > 1 && 's'}
      </h2>
      {answers.map((answer) => (
        <Answer onEditAnswer={editAnswer} key={answer.id} answer={answer} />
      ))}
      <AddAnswer
        onAnswerEdited={handleEditAnswer}
        answerToEdit={answerToEdit}
        questionId={id}
      />
    </>
  )
}
export default AnswersList
