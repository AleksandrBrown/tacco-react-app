import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.value.push(action.payload)
        }
    }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer