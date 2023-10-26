import styled from "styled-components"

const Button=styled.button`
padding: 0.9375rem 1.25rem;
align-items: center;
gap: 0.625rem;
border: 0;
border-radius: 0.5rem;
background: var(--primary-color, #006BFF);
color: var(--text-color-white, #FFF);
font-family: Arial;
font-size: 1.125rem;
font-style: normal;
font-weight: 700;
`


type Props = {
  className?: string
  children?: string
  onClick?: any
}

const PlusButton = ({ className, children, onClick, ...props }: Props) => {
  return (
    <>
      <Button className={className} onClick={onClick} {...props}>
        {children}
      </Button>
    </>
  )
}
export default PlusButton
