import { Link } from 'react-router-dom'
import { StyledQuestionTag } from './question-tag.styles'

const QuestionTag = ({ tag }) => {
  return (
    <Link to={`/questions/tag/${tag}`}>
      <StyledQuestionTag>{tag}</StyledQuestionTag>
    </Link>
  )
}
export default QuestionTag
