import styled from 'styled-components'

export const NewAnswerForm = styled.form`
  margin-inline: 120px 230px;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 15px;
  textarea {
    width: 100%;
    height: 250px;
  }
  input[type='submit'] {
    padding: 8px 15px;
    cursor: pointer;
    font-size: 0.9rem;
    text-transform: uppercase;
    background-color: transparent;
    text-align: right;
  }
`
