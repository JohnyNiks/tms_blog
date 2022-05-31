import React, { ButtonHTMLAttributes, ReactElement } from 'react'
import './Button.scss'

type ButtonProps = {
  text?: string
  disabled?: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  icon?: ReactElement
  alt?: string
}

export const Button = ({
  text,
  disabled = false,
  onClick,
  className = 'primary',
  icon,
  ...rest
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`button button--${className}`}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {icon}
      {text && <span className="button__text">{text}</span>}
    </button>
  )
}
