import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface ThemeState {
  value: string
}

// Define the initial state using that type
const initialState: ThemeState = {
  value: 'light',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTheme } = themeSlice.actions

export default themeSlice.reducer
