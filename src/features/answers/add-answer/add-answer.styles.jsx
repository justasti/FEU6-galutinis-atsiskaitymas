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
    .ql-editor {
      margin-bottom: 50px;
    }
  }
`
