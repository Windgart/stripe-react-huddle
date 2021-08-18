import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
} from '@apollo/client';
import { RestLink } from 'apollo-link-rest';

const { REACT_APP_GRAPHQL_SERVER, REACT_APP_RESTLINK } = process.env;

const restLink = new RestLink({
  uri: REACT_APP_RESTLINK,
});

const httpLink = createHttpLink({ uri: REACT_APP_GRAPHQL_SERVER });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([restLink, httpLink]),
});

export default client;
