import styled from 'styled-components'

export const AnswerContainer = styled.div`
  margin-left: 50px;
  display: flex;
  margin-bottom: 50px;
  margin-top: 20px;
  gap: 20px;
  flex-wrap: nowrap;
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
      white-space: pre-line;
      padding-bottom: 8px;
      ul,
      ol {
        margin-left: 20px;
      }
      blockquote {
        padding: 4px;
        padding-left: 10px;
        background-color: #f5f5f5;
        border-left: 3px solid #aaa;
      }
      pre {
        background-color: #111;
        color: #eee;
        padding: 10px;
        padding-top: 40px;
        margin: 5px 15px;
        position: relative;
        &::before {
          position: absolute;
          top: 5px;
          left: 15px;
          content: 'CODE';
          color: #df6400;
          font-size: 0.9rem;
          font-weight: bold;
        }
      }
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

  .actions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    margin-top: 30px;
    text-transform: uppercase;
    font-size: 1rem;
    p {
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    svg {
      font-size: 1.25rem;
      width: 20px;
      margin-right: 5px;
    }
    .remove svg {
      color: red;
    }
    .edit svg {
      color: #f48023;
    }
  }
`
