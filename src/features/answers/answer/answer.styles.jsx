import styled from 'styled-components'

export const AnswerContainer = styled.div`
  margin-left: 50px;
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
    font-style: italic;
    gap: 30px;
    font-size: 0.9rem;
    border-top: 1px solid #bbb;
    padding-top: 8px;
  }
  .answer-info {
    margin-top: 20px;
    display: flex;
    gap: 20px;
    .ratings {
      width: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 1.75rem;
      font-weight: 300;
      svg {
        cursor: pointer;
      }
    }
    .answer-content {
      font-size: 1.1rem;
      line-height: 1.5;
      flex: 1;
      p {
        padding-bottom: 8px;
      }
    }
    .author-info {
      align-self: start;
      background-color: #e9ffc5;
      padding: 15px;
      border-radius: 5px;
      font-size: 0.9rem;
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 230px;
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
