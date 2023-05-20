import styled from 'styled-components'
export const StyledQuestionForm = styled.form`
  width: 500px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  div.group {
    input {
      border-radius: 4px;
      border: 1px solid #b3b3b3;
    }
    display: flex;
    flex-direction: column;
    label {
      margin-bottom: 5px;
    }
    .quill {
      height: 350px;
      margin-bottom: 50px;
    }
  }
  button {
    align-self: flex-end;
  }
`
