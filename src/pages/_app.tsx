import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../../components/Layout/Layout';
import { Toaster } from 'react-hot-toast';





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
