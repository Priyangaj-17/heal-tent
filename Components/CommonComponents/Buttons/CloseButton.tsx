import styled from "styled-components"
import { ButtonProps } from "./IconButton"

const Button = styled.button`
  padding: 18px;
  border: none;
  color: #2d2d2d;
  background-color: #fff;
  font-size: 24px;
`
const CloseButton = ({ className, ...props }: ButtonProps) => {
  return (
    <>
      <Button {...props}>
        <i className={className}></i>
      </Button>
    </>
  )
}

export default CloseButton
