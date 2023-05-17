import { useGetQuestionsTagsQuery } from '../questions/questionsApi'
import { StyledSideNav } from './sidenav.styles'
const SideNav = () => {
  const { data: tags } = useGetQuestionsTagsQuery()
  return (
    <StyledSideNav>
      <button>New Discussion</button>
      <ul>
        <li>All</li>
        <li>Tags</li>
        <ul>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </ul>
    </StyledSideNav>
  )
}
export default SideNav
