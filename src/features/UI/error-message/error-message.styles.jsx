import styled from 'styled-components'

export const StyledMessage = styled.p`
  font-size: 0.8rem;
  color: red;
  position: ${({ $pos }) => ($pos === 'normal' ? 'static' : 'absolute')};
  bottom: -20px;
  text-transform: uppercase;
`
