import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

const AppNavigator = createStackNavigator({
  Home: Home,
  Details: Detail
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
