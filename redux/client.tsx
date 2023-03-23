import { ApolloClient, InMemoryCache } from "@apollo/client"

const uri : string = process.env.GRAPHQL_SERVER_URI ?? "http://localhost:8080/graphql" 

export const client = new ApolloClient({
  uri : uri,
  cache : new InMemoryCache()
})