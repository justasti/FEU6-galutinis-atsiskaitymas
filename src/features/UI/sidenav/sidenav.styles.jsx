import styled from 'styled-components'

export const StyledSideNav = styled.aside`
  flex-grow: 1;
  width: 150px;
  flex-basis: max-content;
  position: sticky;
  top: 120px;
  height: max-content;
  > ul {
    margin-top: 20px;
    list-style: none;
    > li:last-of-type {
      margin-top: 10px;
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin-left: 5px;
      li:first-child {
        margin-top: 5px;
      }
      .active {
        border-left: 4px solid #ff8b55;
        padding-left: 5px;
        font-weight: 500;
      }
    }
  }
`
