import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import authReducer from './slices/authSlice'
import themeReducer from './slices/themeSlice'
import modalReducer from './slices/modalSlice'
import userReducer from './slices/userSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
        theme: themeReducer,
        modal: modalReducer,
        user: userReducer
    },
})