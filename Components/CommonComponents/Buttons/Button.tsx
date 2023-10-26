import React from "react"
type Props = {
  className?: string
  children?: string
  id?: string
  disabled?: boolean
  ref?: any
  onClick?: any
}
const Button: React.FC<Props> = ({
  className,
  children,
  disabled,
  ref,
  onClick,
}) => {
  return (
    <>
      <button
        className={className}
        disabled={disabled}
        ref={ref}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  )
}

export default Button
