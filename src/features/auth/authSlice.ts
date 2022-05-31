import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AuthState = {
  user: SignUpSuccessPayload | null
  isLoading: string
  error: SignUpError | null
}

export type SignUpError = {
  username: Array<string>
  email: Array<string>
  password: Array<string>
}

export type SignUpPayload = {
  username: string
  email: string
  password: string
}

export type SignUpSuccessPayload = {
  username: string
  email: string
  id: number
}

const initialState: AuthState = {
  user: null,
  isLoading: 'idle',
  error: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUp: (state, action: PayloadAction<SignUpPayload>) => {
      if (state.isLoading === 'idle') {
        state.isLoading = 'pending'
      }
    },
    signUpSuccess: (state, action: PayloadAction<SignUpSuccessPayload>) => {
      if (state.isLoading === 'pending') {
        state.isLoading = 'idle'
        state.user = action.payload
      }
    },
    signUpFailure: (state, action: PayloadAction<SignUpError>) => {
      state.isLoading = 'idle'
      state.error = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { signUpSuccess, signUp, signUpFailure } = authSlice.actions

export default authSlice.reducer
