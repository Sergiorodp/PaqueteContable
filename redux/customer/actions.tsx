import { createAction, createReducer } from '@reduxjs/toolkit'

const saveCustomer = createAction('customer/saveCustomer')
const deletCustomer = createAction('customer/deleteCustomer')