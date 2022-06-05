import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type SignInState = {
  isLoading: string
  error: SignInError | null
}

export type SignInError = {
  detail: string
}

export type SignInPayload = {
  email: string
  password: string
}

export type SignInSuccessPayload = {
  refresh: string
  access: string
}

const initialState: SignInState = {
  isLoading: 'idle',
  error: null,
}

export const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<SignInPayload>) => {
      if (state.isLoading === 'idle') {
        state.isLoading = 'pending'
      }
    },
    signInSuccess: (state, action: PayloadAction<SignInSuccessPayload>) => {
      if (state.isLoading === 'pending') {
        state.isLoading = 'idle'
      }
    },
    signInFailure: (state, action: PayloadAction<SignInError>) => {
      state.isLoading = 'idle'
      state.error = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { signInSuccess, signIn, signInFailure } = signInSlice.actions

export default signInSlice.reducer
