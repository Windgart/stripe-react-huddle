import { gql } from '@apollo/client';

export const GetPaymentIntent = gql`
  mutation getPaymentIntent($amount: Int!, $currency: String!, $paymentMethod: String!) {  
    @rest(path: 'create-payment-intent', method: 'POST') {
      clientSecret
    }
  }
`;
