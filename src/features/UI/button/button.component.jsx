import { StyledButton } from './button.styles'

const Button = ({ children, variant, ...other }) => {
  return (
    <StyledButton $variant={variant} {...other}>
      {children}
    </StyledButton>
  )
}
export default Button
