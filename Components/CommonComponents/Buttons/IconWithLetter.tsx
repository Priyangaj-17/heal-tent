import styled from "styled-components"
import { ButtonProps } from "./IconButton"

const Button = styled.button`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #a6a6a6;
  color: #2d2d2d;
  background-color: #fff;
  color: #fff;
  font-size: 24px;
  background-color: #006bff;
`
const IconWithLetter = ({ className, children, ...props }: ButtonProps) => {
  return (
    <>
      <Button className={className} {...props}>
        {/* <i className={className} /> */}
        {children}
      </Button>
    </>
  )
}
export default IconWithLetter
