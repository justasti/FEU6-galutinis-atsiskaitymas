import styled from 'styled-components'

export const StyledHeader = styled.header`
  height: 100px;
  border-bottom: 1px solid black;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding-inline: 50px;
  z-index: 3;
  img {
    height: 70px;
    padding-bottom: 10px;
  }
  .buttons-container {
    display: flex;
    gap: 15px;
  }
`
