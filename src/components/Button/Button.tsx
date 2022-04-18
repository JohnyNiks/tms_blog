import React from 'react'
import './Button.scss'

type ButtonProps = {
  text: string
  disabled?: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
}

export const Button = ({
  text,
  disabled = false,
  onClick,
  className = 'primary',
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`button button--${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
