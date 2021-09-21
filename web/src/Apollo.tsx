import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import possibleTypes from 'assets/possibleTypes.json';

const client = new ApolloClient({
  uri: process.env.API_HOST,
  cache: new InMemoryCache({ possibleTypes }),
});

const Apollo: React.FC = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Apollo;
