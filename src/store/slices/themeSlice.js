import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 'dark',
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        swapTheme(state) {
            state.value === 'dark' ? state.value = 'light' : state.value = 'dark'
            if(state.value === 'dark')  {
                document.documentElement.classList.remove('dark')
            } else {
                document.documentElement.classList.add('dark');
            }

        },
    }
})

export const { swapTheme } = themeSlice.actions
export default themeSlice.reducer