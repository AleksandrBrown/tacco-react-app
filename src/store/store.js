import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import authReducer from './slices/authSlice'
import themeReducer from './slices/themeSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
        theme: themeReducer
    },
})