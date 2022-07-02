import '../styles/globals.css'
import { QueryClientProvider, QueryClient } from 'react-query';
import { store } from '../redux/store';
import { Provider } from 'react-redux';

// create a client
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
  <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  </QueryClientProvider>
  )
}

export default MyApp
