import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:{
    email:null,
    nickName:null,
    isLogged:false
  }
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user.email=action.payload.email
      state.user.nickName=action.payload.nickName
      state.user.isLogged=true
    },
    logOutUser: (state, action) => {
      state.user.email=null
      state.user.name=null
      state.user.isLogged=false
    },
  },
})

export const { loginUser, logOutUser } = userSlice.actions

export default userSlice.reducer