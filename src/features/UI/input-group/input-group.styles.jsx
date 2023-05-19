import styled from 'styled-components'

export const StyledInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  label {
    align-self: flex-start;
    background-color: #fff;
    transition: 0.3s ease;
    padding-inline: 5px;
    &:not(.filled) {
      font-size: 0.85rem;
      transform: translate(10px, 10px);
    }
    &.filled {
      margin-bottom: 5px;
    }
  }
  &:has(input:focus) label {
    font-size: 1rem;
    transform: translate(0);
    margin-bottom: 5px;
  }
  &:has(p) input {
    border: 1px solid red;
    outline: 1px solid red;
  }
  &:has(p) label {
    color: red;
  }
`
