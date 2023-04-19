import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout';
import { Toaster } from 'react-hot-toast';
import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { config } from "@fortawesome/fontawesome-svg-core";




export default function App({ Component, pageProps }: AppProps) {

  return (
    <Layout>
      
      <Component {...pageProps} />
      <Toaster />
    </Layout>
  
  ) 
}



  
//   return (
//     <ErrorBoundary fallback={<div>Sorry, something went wrong.</div>}>
//     <NavBar />
//     <AuthContextProvider>

//     <Component {...pageProps} />
//     </AuthContextProvider>
//     </ErrorBoundary>
//   ) 
// }
