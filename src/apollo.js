import { ApolloClient, InMemoryCache } from '@apollo/client/core';

const client = new ApolloClient({
  uri: 'https://api-eu-west-2.hygraph.com/v2/cljzmvm1w0czb01uqboh22fk3/master', // Replace with your GraphQL API endpoint
  cache: new InMemoryCache(),
});

export default client;