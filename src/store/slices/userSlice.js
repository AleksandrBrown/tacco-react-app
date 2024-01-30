import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: '',
    name: '',
    surname: '',
    password: '',
    phone: '',
    email: '',
    icon: '',
    orders: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser(state, action) {
            state.login = action.payload.login
            state.name = action.payload.name
            state.surname = action.payload.surname
            state.password = action.payload.password
            state.phone = action.payload.phone
            state.email = action.payload.email
            state.icon = action.payload.icon
            state.orders = action.payload.userOrders
        },
        updatedUser(state,action) {
            state.name = action.payload.name
            state.surname = action.payload.surname
            state.phone = action.payload.phone
            state.email = action.payload.email
            state.icon = action.payload.icon
        }
    }
})

export const { setCurrentUser,updatedUser } = userSlice.actions
export default userSlice.reducer