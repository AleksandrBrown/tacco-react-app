import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    enterData: {},
    error: false,
    isAdmin: false,
    adminLogin: {
        name: 'admin',
        password: '1111'
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state) => {
            state.isLoggedIn = true
          },
          loginAdminSuccess: (state) => {
            state.isLoggedIn = true
            state.isAdmin = true
          },
          logoutSuccess: (state) => {
            state.isLoggedIn = false
            state.isAdmin = false
          },
          errorStatus: (state) => {
            state.error = !state.error 
          }
    }
})

export const { loginSuccess, loginAdminSuccess, logoutSuccess, errorStatus } = authSlice.actions;

export const login = (credentials) => (dispatch) => {
    setTimeout(() => {
      if (credentials.username === 'demo' && credentials.password === '1234') {
        if(initialState.error) dispatch(errorStatus())
        console.log(initialState.error)
        console.log('work')
        dispatch(loginSuccess())
      } else if (credentials.username === initialState.adminLogin.name && credentials.password === initialState.adminLogin.password) {
        console.log('admin')
        dispatch(loginAdminSuccess())
      } else {
        dispatch(errorStatus())
      }
    }, 1000)
  }
export const logout = () => (dispatch) => {
    setTimeout(() => {
      dispatch(logoutSuccess())
    }, 1000)
}
export default authSlice.reducer