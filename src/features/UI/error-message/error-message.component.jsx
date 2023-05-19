import { StyledMessage } from './error-message.styles'
const ErrorMessage = ({ children, pos }) => {
  return <StyledMessage $pos={pos}>{children}</StyledMessage>
}
export default ErrorMessage
