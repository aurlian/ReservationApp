import React from "react";
import { View, Text, FlatList, ListRenderItem } from "react-native";
import { ListItem } from "react-native-elements";
import { NavigationScreenProp } from "react-navigation";
import gql from "graphql-tag";
import { Query } from "react-apollo";

interface Reservation {
  id: string;
  name: string;
  hotelName: string;
}

interface Data {
  reservations: any;
}

interface Variables {}

export interface HomeScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

const RESERVATIONS_QUERY = gql`
  query GetReservations {
    reservations(first: 15, orderBy: createdAt_DESC) {
      id
      name
      hotelName
      arrivalDate
    }
  }
`;

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

  keyExtractor = (item: Reservation, index: number) => item.id;

  renderItem = ({ item }: { item: Reservation }) => (
    <ListItem
      title={item.name}
      subtitle={item.hotelName}
      leftIcon={{ name: "receipt" }}
      onPress={() => this.props.navigation.push("Details", { itemId: item.id })}
    />
  );

  render() {
    return (
      <Query<Data, Variables> query={RESERVATIONS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) {
            return <Text>Loading...</Text>;
          }
          if (error) {
            return <Text>Error!</Text>;
          }
          if (data) {
            return (
              <FlatList
                keyExtractor={this.keyExtractor}
                data={data.reservations}
                renderItem={this.renderItem}
              />
            );
          }
        }}
      </Query>
    );
  }
}
