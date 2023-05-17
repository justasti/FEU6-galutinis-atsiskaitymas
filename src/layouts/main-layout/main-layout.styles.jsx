import styled from 'styled-components'

export const MainContentContainer = styled.main`
  min-height: calc(100vh - 200px);
  padding: 20px 50px;
  display: flex;
  gap: 20px;
  section {
    flex-grow: 999;
    flex-basis: 0;
    padding-left: 20px;
    border-left: 1px solid black;
  }
`
