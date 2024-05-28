import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { testSlice } from "../../features/scratch/testSlice"
import { visitorSlice } from "../../features/visitor/visitorSlice"
import { modalSlice } from "../common/modals/modalSlice"


export const store = configureStore({
    reducer:{
        test: testSlice.reducer,
        visitors: visitorSlice.reducer,
        modals: modalSlice.reducer
    }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector



