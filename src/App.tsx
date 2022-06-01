import React, { useState } from 'react'
import { Button } from './components/Button'
import { Input } from './components/Input'

import { useTheme } from './features/theme'

import { useAppDispatch, useAppSelector } from './redux/hooks'
import { signUp } from './features/auth'
import { signIn } from './features/signIn'

function App() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmedPassword, setConfirmedPassword] = useState('')
  const error = useAppSelector(state => state.auth.error)
  const { theme, toggleTheme } = useTheme()

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const onConfirmedPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmedPassword(event.target.value)
  }

  const dispatch = useAppDispatch()

  const submitForm = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    const formData = {
      username,
      email,
      password,
    }
    dispatch(signUp(formData))
  }

  const submitSignInForm = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.preventDefault()
    const formData = {
      email,
      password,
    }
    dispatch(signIn(formData))
  }

  return (
    <div className={`App theme--${theme}`}>
      <Button text="Primary" className="primary" onClick={toggleTheme} />
      <form>
        <Input
          title="Email"
          value={email}
          onChange={onEmailChange}
          error={Boolean(error?.email[0])}
          errorMessage={error?.email[0]}
        />
        <Input
          type="password"
          title="Password"
          value={password}
          onChange={onPasswordChange}
          error={Boolean(error?.password[0])}
          errorMessage={error?.password[0]}
        />
        <Button text="Sign In" className="primary" onClick={submitSignInForm} />
      </form>
      <hr />
      <form>
        <Input
          title="Name"
          value={username}
          onChange={onNameChange}
          error={Boolean(error?.username[0])}
          errorMessage={error?.username[0]}
        />
        <Input
          title="Email"
          value={email}
          onChange={onEmailChange}
          error={Boolean(error?.email[0])}
          errorMessage={error?.email[0]}
        />
        <Input
          type="password"
          title="Password"
          value={password}
          onChange={onPasswordChange}
          error={Boolean(error?.password[0])}
          errorMessage={error?.password[0]}
        />
        <Input
          type="password"
          title="Confirm password"
          value={confirmedPassword}
          onChange={onConfirmedPasswordChange}
        />
        <Button text="Sign Up" className="primary" onClick={submitForm} />
      </form>
    </div>
  )
}
export default App
