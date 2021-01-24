import { AppProps } from 'next/app';
import AppProvider from '../hooks';


import '../styles/globals.css'
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AppProvider>
          <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
