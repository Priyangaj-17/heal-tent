import styled from "styled-components";

const Button = styled.button`
  padding: 18px;
  border-radius: 8px;
  border: 1px solid #a6a6a6;
  color: #2d2d2d;
  background-color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

export type ButtonProps = {
  id?: string;
  disabled?: boolean;
  className?: string;
  children?: string;
  onClick?: (data: any) => void;
};

const IconButton = ({ className, ...props }: ButtonProps) => {
  return (
    <>
      <Button {...props}>
        <i className={className}></i>
      </Button>
    </>
  );
};

export default IconButton;
