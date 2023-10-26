import styled from "styled-components"
import { ButtonProps } from "./IconButton"

const Button = styled.button`
  padding: 18px;
  border-radius: 8px;
  border: none;
  background-color: #ff2d2d;
  font-size: 24px;
  span {
    color: #fff;
  }
`
const DangerButton = ({ children, ...props }: ButtonProps) => {
  return (
    <>
      <Button {...props}>
        <span>{children}</span>
      </Button>
    </>
  )
}
export default DangerButton
