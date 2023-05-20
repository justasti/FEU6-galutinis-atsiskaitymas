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
        ul,
        ol {
          margin-left: 20px;
        }
        blockquote {
          padding: 4px;
          padding-left: 10px;
          background-color: #f5f5f5;
          border-left: 3px solid #aaa;
          &.ql-indent-1 {
            padding-left: 2rem;
          }
          &.ql-indent-2 {
            padding-left: 4rem;
          }
          &.ql-indent-3 {
            padding-left: 6rem;
          }
        }
        pre {
          background-color: #111;
          color: #ccc;
          padding: 10px;
          padding-top: 40px;
          margin: 1rem 0 1rem 2rem;
          position: relative;
          font-size: 0.9rem;
          max-height: 300px;
          max-width: 55vw;
          overflow: auto;
          &::before {
            position: absolute;
            top: 5px;
            left: 10px;
            content: 'CODE';
            color: #df6400;
            font-size: 0.8rem;
            font-weight: bold;
          }
        }
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
