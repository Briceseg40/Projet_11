import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    firstName: null,
    lastName: null,
    userName: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserReducer: (state, action) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.userName = action.payload.userName
        },
        clearUserReducer: (state) => {
            state.firstName = null
            state.lastName = null
            state.userName = null
        }
    }
})

export const { setUserReducer, clearUserReducer } = userSlice.actions
export default userSlice.reducer