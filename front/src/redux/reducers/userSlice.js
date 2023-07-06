import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:{
    email:null,
    nickName:null,
    isLogged:false,
    token:null,
    logInLoading:false,
    logInDone:false,
    logInError:false,
  }
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user.email=action.payload.userResponse.email
      state.user.nickName=action.payload.userResponse.nickName
      state.user.token=action.payload.token
      localStorage.setItem('token', action.payload.token);
      state.user.isLogged=true
    },
    authUser: (state, action) => {
      state.user.email=action.payload.userResponse.email
      state.user.nickName=action.payload.userResponse.nickName
      state.user.isLogged=true
    },
    unauthUser: (state, action) => {
      localStorage.removeItem('token');
      state.user.token=undefined
    },
    logOutUser: (state, action) => {
      state.user.email=null
      state.user.name=null
      state.user.token=null
      state.user.isLogged=false
      localStorage.removeItem('token');
    },
  },
})

export const { loginUser, logOutUser,authUser,unauthUser} = userSlice.actions

export default userSlice.reducer