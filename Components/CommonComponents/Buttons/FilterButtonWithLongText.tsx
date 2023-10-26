import styled from "styled-components"
import { ButtonProps } from "./IconButton"

const Button = styled.button`
  padding: 18px;
  border-radius: 8px;
  border: 1px solid #a6a6a6;
  color: #2d2d2d;
  font-size: 24px;
  display: flex;
  align-items: center;
  gap: 30px;
`
const FilterButtonWithLongText = ({
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
export default FilterButtonWithLongText
