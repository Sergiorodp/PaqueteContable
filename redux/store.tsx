import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { customerReducers } from "./customer/reducers";
import { PUCReducers } from "./PUC/reducers";

export const store = configureStore({
    reducer : combineReducers({
        PUC : PUCReducers,
        customer : customerReducers
    })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch