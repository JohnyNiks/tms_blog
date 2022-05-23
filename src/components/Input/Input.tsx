import React from 'react'
import './Input.scss'

type InputProps = {
  type?: React.HTMLInputTypeAttribute
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  title?: string
  placeholder?: string
  disabled?: boolean
  error?: boolean
  errorMessage?: string
  value: string
}

export const Input = ({
  type,
  onChange,
  title,
  placeholder,
  disabled,
  error,
  errorMessage,
  value,
}: InputProps) => {
  return (
    <div className="input">
      {title && (
        <label className="input__label" htmlFor={type}>
          {title}
        </label>
      )}
      <input
        id={type}
        className={`input__input ${error ? 'input__input--error' : null}`}
        type={type ?? 'text'}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      />
      <span className="input__error">{error && errorMessage}</span>
    </div>
  )
}
