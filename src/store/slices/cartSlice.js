import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
    total: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const existingProductIndex = state.value.findIndex(product => product.id === action.payload.id);
            if (existingProductIndex !== -1) {
                state.value[existingProductIndex].quantity += 1
            } else {
                state.value.push({
                    id: action.payload.id,
                    name: action.payload.productName,
                    img: action.payload.productImg,
                    price: action.payload.productPrice,
                    quantity: 1,
                    customStatus: action.payload.customOrder ? true : false,
                    customOrder: action.payload.customOrder ? action.payload.customOrder : false,
                })
            }
            state.total += parseFloat(action.payload.productPrice);
        },
        removeFromCart(state, action) {
            const productIndex = state.value.findIndex(product => product.id === action.payload)
            if (productIndex !== -1) {
                state.total -= parseFloat(state.value[productIndex].price)
                state.value[productIndex].quantity -= 1;
                if (state.value[productIndex].quantity === 0) {
                    state.value.splice(productIndex, 1)
                }
                
            }
        }
    }
})

export const { addToCart,removeFromCart } = cartSlice.actions
export default cartSlice.reducer