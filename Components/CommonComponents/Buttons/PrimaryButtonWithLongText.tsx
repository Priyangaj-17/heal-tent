import styled from "styled-components"
import { ButtonProps } from "./IconButton"

const Button = styled.button`
  padding: 18px;
  border-radius: 8px;
  border: 1px solid #a6a6a6;
  font-size: 24px;
  background-color: rgb(0, 107, 255);
  display: flex;
  gap: 10px;
  color: #fff;
  align-items: center;
  span {
    color: #fff;
  }
`
const PrimaryButtonWithLongText = ({
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <>
      <Button {...props}>
        <span>{children}</span>
        <i className={className}></i>
      </Button>
    </>
  )
}
export default PrimaryButtonWithLongText
