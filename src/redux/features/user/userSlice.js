import { createSlice } from '@reduxjs/toolkit';


const initialState = {};


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authUser: (state, action) => {
            state.username = action.payload.username
            state.uid = action.payload.uid
            state.email = action.payload.email
        },
        authLogout: (state) => {
            return {}
        }
    },
})

// Action creators are generated for each case reducer function
export const { authUser, authLogout } = userSlice.actions

export default userSlice.reducer