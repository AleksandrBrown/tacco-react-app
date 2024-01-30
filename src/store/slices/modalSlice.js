import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    current: null,
    isopen: false,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal(state, action) {
            state.isopen = true
            state.current = action.payload
        },
        closeModal(state, action) {
            state.isopen = false
            state.current = null
        }
    }
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer