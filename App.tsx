import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";

import Detail from "./pages/Detail";
import Home from "./pages/Home";

const AppNavigator = createStackNavigator({
  Home: Home,
  Details: Detail
});

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri:
        "https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev"
    }),
    cache: new InMemoryCache()
  });
};

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    const client = createApolloClient();
    return (
      <ApolloProvider client={client}>
        <AppContainer />
      </ApolloProvider>
    );
  }
}
