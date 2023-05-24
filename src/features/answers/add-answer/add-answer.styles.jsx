import styled from 'styled-components'

export const NewAnswerForm = styled.form`
  margin-inline: 100px;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 50px;
  .quill {
    width: 100%;
    height: 250px;
    background-color: #fff;
    .ql-editor {
      background-color: #fff;
      margin-bottom: 50px;
    }
  }
`
