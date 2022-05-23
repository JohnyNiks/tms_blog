import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AuthState = {
  user: User | null
  loading: string
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
  loading: 'idle',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUpLoading: state => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    },
    signUp: (state, action: PayloadAction<SignUpPayload>) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.user = action.payload
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { signUp } = authSlice.actions

export default authSlice.reducer
