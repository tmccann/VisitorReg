import { createSlice } from "@reduxjs/toolkit"
import { User } from "../../app/types/user"

type State = {
    authenticated : boolean
    currentUser: User | null
}

const initialState: State ={
    authenticated: false,
    currentUser: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers : {
        signIn: (state, action)=>{
            state.authenticated = true
            state.currentUser={
                userName: action.payload.userName
            }
        },

        signOut: (state) =>{
            state.authenticated = false
            state.currentUser = null
        }

    } 
})

export const {signIn, signOut} = authSlice.actions