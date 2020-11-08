import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { client } from './src/context/ApolloContent';

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);