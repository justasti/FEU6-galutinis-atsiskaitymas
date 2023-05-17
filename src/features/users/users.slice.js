import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  users: [],
  authUser: null,
  error: ''
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    login: (state, action) => {
      state.authUser = action.user
    }
  }
})

export default usersSlice.reducer
export const { login } = usersSlice.actions