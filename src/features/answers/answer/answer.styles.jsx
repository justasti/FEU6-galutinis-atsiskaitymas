import styled from 'styled-components'

export const AnswerContainer = styled.div`
  background-color: #fff;
  padding: 10px;
  margin-left: 90px;
  margin-block: 30px;
  display: flex;
  gap: 20px;
  .left {
    width: 50px;
    display: flex;
    flex-direction: column;
    gap: 15px;
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
      border-top: 1px dashed #888;
      border-radius: 16px;
      padding-block: 16px;
      flex: 1;
      display: flex;
      flex-direction: column;
      p {
        line-height: 1.75;
      }
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
`
