import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../../components/navbar/navbar'
import { useEffect } from 'react';
import ErrorBoundary from '@/ErrorBoundary';
import { AuthContextProvider } from '../../lib/context';





export default function App({ Component, pageProps }: AppProps) {

  


  
  return (
    <ErrorBoundary fallback={<div>Sorry, something went wrong.</div>}>
    <NavBar />
    <AuthContextProvider>

    <Component {...pageProps} />
    </AuthContextProvider>
    </ErrorBoundary>
  ) 
}
