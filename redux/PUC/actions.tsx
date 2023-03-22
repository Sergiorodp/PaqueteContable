import { createAction } from '@reduxjs/toolkit'
import { PUCtype } from './initialstate'

const savePUC=  createAction<PUCtype[]>('PCU/savePUC')

export {
    savePUC
}