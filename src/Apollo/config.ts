import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
} from '@apollo/client';
import { RestLink } from 'apollo-link-rest';

const restLink = new RestLink({
  uri: 'https://react-stripe-huddle.herokuapp.com/api/payment/',
});

const httpLink = createHttpLink({ uri: 'http://localhost:4000/' });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([restLink, httpLink]),
});

export default client;
