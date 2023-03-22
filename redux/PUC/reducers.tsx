import { createReducer } from '@reduxjs/toolkit'
import { PUCinitialState, PUCtype } from "./initialstate";
import { savePUC} from "./actions";
import { action } from '../types';
import { stat } from 'fs';

const savePUCReducer = (state : PUCtype[], action : action<PUCtype[]>) => {
    state = action.payload
    return state
}

export const PUCReducers = createReducer(PUCinitialState, (builder) => {
    builder.addCase(savePUC, savePUCReducer)
})
