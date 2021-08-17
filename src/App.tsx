import { StyleProvider } from './StyleProvider';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Layout from 'components/Layout';
import Routing from 'routing';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from 'Apollo/config';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY || '');

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <StyleProvider />
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Elements stripe={stripePromise}>
              <Layout>
                <ToastContainer />
                <Routing />
              </Layout>
            </Elements>
          </BrowserRouter>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
