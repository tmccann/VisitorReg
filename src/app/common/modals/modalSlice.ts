import { createSlice } from "@reduxjs/toolkit"

type State ={
    open: boolean
    type: string | null
    data: any

}


// intial values
const initialState: State ={
    open: false,
    type:null,
    data:null
}

export const modalSlice = createSlice ({
    name: 'modal',
    initialState,
    // when open it take a payload an information from open modal 
    reducers:{
        openModal:(state, action)=>{
            state.type =action.payload.type
            state.open = true
            state.data =action.payload.data
        },
    // when closing modal on state.open value need changes
        closeModal:(state)=>{
            state.type = null
            state.open = false
            state.data = null
        }
    }
})

export const {openModal, closeModal} = modalSlice.actions 