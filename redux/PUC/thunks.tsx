import { DocumentNode, gql, useQuery } from "@apollo/client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../client";


const GET_PUC : DocumentNode = gql`
      query {
        getCodes {
            codigo
            nombreCuenta
            naturaleza
        }
      }
    `
const getPUCs = createAsyncThunk('PUC/getPUCS', async () => {
    const { data } = await client.query({
        query : GET_PUC
    })
    return data
})

export {
    getPUCs
}