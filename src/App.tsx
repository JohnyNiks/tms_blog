import React, { useState } from 'react'
import { Button } from './components/Button'
import { Input } from './components/Input'

import { useTheme } from './features/theme'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmedPassword, setConfirmedPassword] = useState('')

  const { theme, toggleTheme } = useTheme()

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
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

  return (
    <div className={`App theme--${theme}`}>
      <Button text="Primary" className="primary" onClick={toggleTheme} />
      <form>
        <Input title="Name" value={name} onChange={onNameChange} />
        <Input title="Email" value={email} onChange={onEmailChange} />
        <Input
          type="password"
          title="Password"
          value={password}
          onChange={onPasswordChange}
        />
        <Input
          type="password"
          title="Confirm password"
          value={confirmedPassword}
          onChange={onConfirmedPasswordChange}
        />
      </form>
    </div>
  )
}
export default App
