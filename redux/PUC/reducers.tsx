import { createReducer } from '@reduxjs/toolkit'
import { PUCinitialState, PUCtype } from "./initialstate";
import { savePUC} from "./actions";
import { action } from '../types';
import { DocumentNode, useQuery } from '@apollo/client';
import { getPUCs } from "./thunks";

type CodesPayload = {
  getCodes : PUCtype[]
}

const SavePUCReducer = (state : PUCtype[], action : action<PUCtype[]>) => {
    state = action.payload
    return state
}

export const PUCReducers = createReducer(PUCinitialState, (builder) => {
    builder
      .addCase(savePUC, SavePUCReducer)
      .addCase(getPUCs.fulfilled, (state : PUCtype[], action : action<CodesPayload>) => {
        state = action.payload.getCodes
        return state
      })
})
