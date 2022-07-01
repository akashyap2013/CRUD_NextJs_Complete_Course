import '../styles/globals.css'
import { QueryClientProvider, QueryClient } from 'react-query';


// create a client
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
  <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
  </QueryClientProvider>
  )
}

export default MyApp
