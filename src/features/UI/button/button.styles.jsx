import styled from 'styled-components'

export const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: 8px;
  background-color: transparent;
  border: 1px solid #f48023;
  color: #f48023;
  transition: 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: #ffeee0;
  }
  ${({ $variant }) =>
    $variant === 'inverted' &&
    `
    background-color: #f48023;
    border: 1px solid #e16500;
    color: #fff;
    &:hover {
      background-color: #f4a25f
    }
    `}
`
