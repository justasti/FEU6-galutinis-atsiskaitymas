import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const URL = 'http://localhost:3000/users'

const initialState = {
  loading: false,
  authUser: null,
  error: ''
}

const getUserByEmail = createAsyncThunk('users/getUserByEmail', async (email) => {
  return axios.get(`${URL}?email=${email}`)
    .then(res => res.data)
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    login: (state, action) => {
      state.authUser = action.payload
    },
    logout: (state) => {
      state.authUser = null
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getUserByEmail.pending, (state) => {
        state.loading = true
      })
      .addCase(getUserByEmail.fulfilled, (state, action) => {
        state.loading = false
      })
  }
})

export default usersSlice.reducer
export const { login, logout } = usersSlice.actions
export { getUserByEmail }