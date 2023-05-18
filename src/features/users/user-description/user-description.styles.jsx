import styled from 'styled-components'

export const StyledUserDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
  img {
    width: 200px;
    aspect-ratio: 1;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
  h4 {
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  p {
    margin-top: -10px;
  }
`
