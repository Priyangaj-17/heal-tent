import styled from "styled-components"
const Container = styled.div`
  width: 250px;
  height: 60px;
  text-align: center;
  border: 1px solid #d9d9d9;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  padding: 20px 0px;
`
const IconDiv = styled.div`
  width: 50px;
  height: 50px;
  background-color: #e6f0ff;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  color: #006bff;
`
type ButtonProps = {
  id?: string
  className?: string
  text?: string
  text2?: string
  children?: string
}

const IconWithText = ({ className, text, children }: ButtonProps) => {
  return (
    <Container>
      {/* <div className="flex al-center js-spb"> */}
      <IconDiv>
        <i className={className}></i>
      </IconDiv>
      <div>
        <h4>{text}</h4>
        <h1 className="text bold-600">{children}</h1>
      </div>
      {/* </div> */}
    </Container>
  )
}
export default IconWithText
