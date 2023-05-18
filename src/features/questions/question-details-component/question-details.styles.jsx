import styled from 'styled-components'

export const DetailedQuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 50px;
  h2 {
    font-size: 2.5rem;
    font-weight: 500;
    color: #5c5c5c;
  }
  .date-info {
    display: flex;
    gap: 30px;
    font-size: 0.9rem;
    border-bottom: 1px solid #bbb;
    padding-bottom: 15px;
  }
  .question-info {
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    .ratings {
      width: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 2.5rem;
      font-weight: 300;
      svg {
        cursor: pointer;
      }
    }
    .question-content {
      font-size: 1.25rem;
      line-height: 1.5;
      flex: 1;
      p {
        margin-bottom: 15px;
      }
    }
    .author-info {
      background-color: #fff6c5;
      padding: 15px;
      border-radius: 5px;
      font-size: 0.9rem;
      display: flex;
      flex-direction: column;
      gap: 10px;
      div {
        display: flex;
        align-items: center;
        gap: 10px;
        img {
          width: 50px;
          border-radius: 50%;
        }
      }
    }
  }
`
