import { createSlice } from "@reduxjs/toolkit"
import { sampleData } from "../../app/api/sampleData"
import { AppVisitors } from "../../app/types/visitors"

type State ={
    visitors:AppVisitors[]
}


const initialState : State ={
    visitors: sampleData
}

export const visitorSlice = createSlice({
    name: 'visitors',
    initialState,
    reducers:{
        createVisitor:(state,action)=>{
            state.visitors.push(action.payload)
        },

        deleteVisitor:(state,action)=>{
            state.visitors = state.visitors.filter(e => e.id !== action.payload);
        }

    }
})


export const {createVisitor, deleteVisitor} = visitorSlice.actions