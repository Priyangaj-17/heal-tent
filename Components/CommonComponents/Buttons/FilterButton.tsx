import styled from "styled-components";
import { ButtonProps } from "./IconButton";

const Button = styled.button`
  padding: 0.9375rem 1.125rem;
  display: flex;
  height: 3.1875rem;
  padding: 0.9375rem 1.125rem;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.5rem;
  border: 1px solid var(--greyscale-75, #bfbfbf);
  background: var(--white, #fff);
  color: var(--text-color-dark-grey, #606060);
  font-family: Arial;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
`;
const FilterButton = ({
  className,
  children,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <>
      <Button {...props}>
        <span>{children}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width=".95rem"
          height="0.75rem"
          viewBox="0 0 16 9"
          fill="none"
        >
          <path
            d="M2 1.5L8 7.5L14 1.5"
            stroke="#606060"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Button>
    </>
  );
};
export default FilterButton;
