import styled from 'styled-components'

export const StyledQuestionPreview = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  img {
    width: 50px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
  }
  .question-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    p {
      font-size: 0.8rem;
    }
  }
  .question-tag {
    padding: 5px 20px;
    font-size: 0.8rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.75px;
    border-radius: 8px;
    background-color: yellow;
  }
  .question-stats {
    display: flex;
    gap: 10px;
    span {
      display: flex;
      gap: 5px;
      align-items: center;
      svg {
        font-size: 1.25rem;
      }
    }
  }
`
