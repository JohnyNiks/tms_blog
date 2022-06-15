import { Button } from './Button'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { ReactComponent as LikeIcon } from '../../assets/images/like.svg'

describe('Button', () => {
  it('should render with text', () => {
    render(<Button text="Click" onClick={() => console.log('click')} />)
    const buttonElement = screen.getByText(/Click/i)
    expect(buttonElement).toBeInTheDocument()
  })

  it('should render with icon', () => {
    render(
      <Button
        text="Click"
        icon={<LikeIcon data-testid="button-icon" />}
        onClick={() => console.log('click')}
      />
    )
    const svgIcon = screen.getByTestId('button-icon')
    expect(svgIcon).toBeInTheDocument()
  })

  it('should render with disabled state', () => {
    render(
      <Button
        text="Click"
        data-testid={'button'}
        disabled
        onClick={() => console.log('click')}
      />
    )
    const buttonElement = screen.getByTestId('button')
    expect(buttonElement).toBeDisabled()
  })
})
