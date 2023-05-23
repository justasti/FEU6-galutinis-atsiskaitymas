import styled from 'styled-components'

export const AnswerContainer = styled.div`
  margin-left: 90px;
  margin-block: 30px;
  display: flex;
  gap: 20px;
  .left {
    width: 50px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    img {
      width: 100%;
      aspect-ratio: 1;
      border-radius: 50%;
      object-fit: cover;
      object-position: center;
    }
    .ratings {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      font-weight: 300;
      span {
        margin-block: -10px;
      }
      svg {
        cursor: pointer;
        color: #888;
        &.active {
          color: #e65e1b;
        }
      }
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .date-info {
      color: #aaa;
      margin-bottom: 12px;
      font-size: 1.05rem;
      a {
        color: #e65e1b;
        font-weight: 500;
      }
      .edited-on {
        font-style: italic;
        font-size: 1rem;
      }
    }
    .actions {
      display: flex;
      gap: 15px;
      color: #888;
      font-size: 0.85rem;
      margin-bottom: 12px;
      span {
        cursor: pointer;
        &:first-of-type:hover {
          color: red;
        }
        &:last-of-type:hover {
          color: #ff8345;
        }
      }
    }
    .answer-content {
      border-block: 1px dashed #888;
      padding-block: 16px;
      display: flex;
      flex-direction: column;
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
        margin: 8px 0 8px 20px;
        position: relative;
        font-size: 0.9rem;
        max-height: 300px;
        overflow: auto;
        width: 100%;
        max-width: 800px;
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
  /* display: flex;
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
      padding-bottom: 4px;
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
  } */
`
