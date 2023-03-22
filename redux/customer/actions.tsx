import { createAction } from '@reduxjs/toolkit'
import { CustomerData } from './initialstate'

const saveCustomer = createAction<CustomerData>('customer/saveCustomer')
const deletCustomer = createAction('customer/deleteCustomer')

export {
    saveCustomer,
    deletCustomer
}