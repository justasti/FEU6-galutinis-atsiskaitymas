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
  .search {
    width: 300px;
    position: relative;
    #search-bar {
      width: 100%;
      padding: 5px 10px;
      border-radius: 100px;
      border: 1px solid #f48023;
      &:focus {
        outline: 2px solid #f48023;
      }
    }
    button {
      position: absolute;
      inset: 50% 0 auto auto;
      background-color: transparent;
      border: none;
      svg {
        color: #f48023;
        cursor: pointer;
        transform: translate(-3px, -50%);
        padding: 5px;
        border-radius: 50%;
        &:hover {
          background-color: #eee;
        }
      }
    }
  }
  .buttons-container {
    display: flex;
    gap: 15px;
  }
`
