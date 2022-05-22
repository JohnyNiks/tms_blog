import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AuthState = {
  user: User | null
}

type User = {
  name: string
}

type SignUpPayload = {
  name: string
  email: string
  password: string
}

const initialState: AuthState = {
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUp: (state, action: PayloadAction<SignUpPayload>) => {
      state.user = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { signUp } = authSlice.actions

export default authSlice.reducer
