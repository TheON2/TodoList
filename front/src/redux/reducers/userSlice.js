import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:{
    email:null,
    nickName:null,
    isLogged:false,
    token:null,
  }
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log(action.payload)
      state.user.email=action.payload.userResponse.email
      state.user.nickName=action.payload.userResponse.nickName
      state.user.token=action.payload.token
      state.user.isLogged=true
      console.log(state.user.token)
    },
    logOutUser: (state, action) => {
      state.user.email=null
      state.user.name=null
      state.user.token=null
      state.user.isLogged=false
    },
  },
})

export const { loginUser, logOutUser } = userSlice.actions

export default userSlice.reducer