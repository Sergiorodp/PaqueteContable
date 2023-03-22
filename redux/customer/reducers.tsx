import { createReducer } from '@reduxjs/toolkit'
import { CustomerData, customerInitialState } from "./initialstate";
import { deletCustomer, saveCustomer } from "./actions";
import { action } from '../types';

// reducers 

const saveCustomerReducer = (state: CustomerData, action : action<CustomerData>) => {
    const newState = action.payload;

    state.email = newState?.email
    state.identification = newState?.identification
    state.name = newState.name
    state.surname = newState.surname

}

const deletCustomerReducer = () => {}


export const customerReducers = createReducer(customerInitialState, (builder) => {
    builder
      .addCase(saveCustomer, saveCustomerReducer)
      .addCase(deletCustomer, deletCustomerReducer)
})