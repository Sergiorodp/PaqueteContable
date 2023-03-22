import { PayloadAction } from "@reduxjs/toolkit";
import { CustomerData } from "./initialstate";

export const reducers = {

    saveCustomer : (state : CustomerData, action : CustomerData)  => {
        state.email = action.email
    }
}