import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AuthState = {
  user: User | null
  isLoading: string
  error: string | null
}

type User = {
  name: string
}

export type SignUpPayload = {
  name: string
  email: string
  password: string
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
    signUp: state => {
      if (state.isLoading === 'idle') {
        state.isLoading = 'pending'
      }
    },
    signUpSuccess: (state, action: PayloadAction<SignUpPayload>) => {
      if (state.isLoading === 'pending') {
        state.isLoading = 'idle'
        state.user = action.payload
      }
    },
    signUpFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = 'idle'
      state.error = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { signUpSuccess, signUp, signUpFailure } = authSlice.actions

export default authSlice.reducer
