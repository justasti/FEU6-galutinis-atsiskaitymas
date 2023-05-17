import { useGetQuestionsTagsQuery } from '../questions/questions.api'
import { StyledSideNav } from './sidenav.styles'
import { Link } from 'react-router-dom'
const SideNav = () => {
  const { data: tags } = useGetQuestionsTagsQuery()
  return (
    <StyledSideNav>
      <button>New Discussion</button>
      <ul>
        <li>
          <Link to='/'>All</Link>
        </li>
        <li>Tags</li>
        <ul>
          {tags?.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </ul>
    </StyledSideNav>
  )
}
export default SideNav
