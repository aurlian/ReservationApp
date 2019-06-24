import React from "react";
import { View, Text, FlatList, ListRenderItem } from "react-native";
import { ListItem } from "react-native-elements";
import { NavigationScreenProp } from "react-navigation";

interface Reservation {
  name: string;
  subtitle: string;
}

export interface HomeScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

export default class Home extends React.Component<HomeScreenProps, object> {
  static navigationOptions = {
    title: "List of Reservations",
    headerStyle: {
      backgroundColor: "#2C354C"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  list: Reservation[] = [
    {
      name: "Amy Farha",
      subtitle: "Vice President"
    },
    {
      name: "Chris Jackson",
      subtitle: "Vice Chairman"
    }
  ];

  keyExtractor = (item: Reservation, index: number) => index.toString();

  renderItem = ({ item }: { item: Reservation }) => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      leftIcon={{ name: "receipt" }}
      onPress={() => this.props.navigation.push("Details")}
    />
  );

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.list}
        renderItem={this.renderItem}
      />
    );
  }
}
