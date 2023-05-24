import { useGetQuestionsTagsQuery } from '../../questions/questions.api'
import { StyledSideNav } from './sidenav.styles'
import { Button } from '../../'
import { Link, NavLink } from 'react-router-dom'
const SideNav = () => {
  const { data: tags } = useGetQuestionsTagsQuery()
  return (
    <StyledSideNav>
      <Link to='/questions/add'>
        <Button variant='inverted'>New&nbsp;Discussion</Button>
      </Link>
      <ul>
        <li>
          <Link to='/'>All</Link>
        </li>
        <li>Tags:</li>
        <ul>
          {tags?.map((tag) => (
            <li key={tag}>
              <NavLink to={`/questions/tag/${tag}`}>{tag}</NavLink>
            </li>
          ))}
        </ul>
      </ul>
    </StyledSideNav>
  )
}
export default SideNav
