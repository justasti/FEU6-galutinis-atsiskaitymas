import { StyledMessage } from './error-message.styles'
const ErrorMessage = ({ children, pos, style }) => {
  return (
    <StyledMessage style={style} $pos={pos}>
      {children}
    </StyledMessage>
  )
}
export default ErrorMessage
