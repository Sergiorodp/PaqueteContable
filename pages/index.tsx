import { Anybody, Inter } from "next/font/google"

// layout
import PrincipalLayout from '@/shared/components/PrincipalLayout/index'
import { useEffect } from "react"

const uri : string = process.env.GRAPHQL_SERVER_URI ?? "http://localhost:8080/graphql" 

export default function Home() {

  useEffect(() => {
    console.log(uri)
    fetch(uri, {
      method: 'POST',
      headers : { 'content-type' : 'application/json'},
      body : JSON.stringify({
        query : `query {
          getUsers {
            name
          }
        }`
      })
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(e => console.log(e))
  })

  return (
    <PrincipalLayout title={'Home'}>
      <h2> Generico </h2>
    </PrincipalLayout>
  )
}
