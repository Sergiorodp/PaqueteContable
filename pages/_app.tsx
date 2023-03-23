import '@/styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { store } from "../redux/store";
import { client } from "../redux/client";

export default function App({ Component, pageProps }: AppProps) {
  return(
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  </ApolloProvider>
      
    ) 
}
