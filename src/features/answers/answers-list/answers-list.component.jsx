import { Answer, AddAnswer } from '../../'
import { useGetAnswersByQuestionIdQuery } from '../answers.api'

const AnswersList = ({ id }) => {
  const {
    data: answers,
    isLoading,
    isSuccess,
  } = useGetAnswersByQuestionIdQuery(id)
  if (isLoading) return <p>Loading...</p>
  if (!answers.length)
    return (
      <>
        <h2>No answers yet</h2>
        <AddAnswer questionId={id} />
      </>
    )
  return (
    isSuccess && (
      <>
        <h2>
          {answers.length} answer{answers.length > 1 && 's'}
        </h2>
        {answers.map((answer) => (
          <Answer key={answer.id} answer={answer} />
        ))}
        <AddAnswer questionId={id} />
      </>
    )
  )
}
export default AnswersList
