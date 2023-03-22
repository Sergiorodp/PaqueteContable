import '@/styles/globals.css'
import { ApolloClient, HttpLink, gql, InMemoryCache} from '@apollo/client'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { store } from "../redux/store";

const uri : string = process.env.GRAPHQL_SERVER_URI ?? "http://localhost:8080/graphql" 

const client = new ApolloClient({
  uri : uri,
  cache : new InMemoryCache()
})

client.query({
  query : gql`
    query {
      getUsers {
        name
      }
    }
  `
})
.then(res => console.log(res.data))
.catch(e => console.log(e))

export default function App({ Component, pageProps }: AppProps) {
  return(
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
      
    ) 
}
