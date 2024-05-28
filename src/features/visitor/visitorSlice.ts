import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { AppVisitors } from "../../app/types/visitors"
import { Timestamp } from "firebase/firestore"

type State ={
    visitors:AppVisitors[]
}


const initialState : State ={
    visitors: []
}

export const visitorSlice = createSlice({
    name: 'visitors',
    initialState,
    reducers:{
        
        setVisitors:{
            reducer:(state, action: PayloadAction<AppVisitors[]>)=>{
                state.visitors = action.payload
        } ,
         prepare : (visitors: any)=>{
            const mapped  = visitors.map(( e:any) =>{
                return{ ...e, date:(e.date as Timestamp).toDate().toDateString()}
            });
            return {payload: mapped}
         }
        },

        createVisitor:(state,action)=>{
            state.visitors.push(action.payload)
        },

        deleteVisitor:(state,action)=>{
            state.visitors = state.visitors.filter(e => e.id !== action.payload);
        }

    }
})


export const {createVisitor, deleteVisitor, setVisitors} = visitorSlice.actions