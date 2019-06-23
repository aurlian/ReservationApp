/**
 * @format
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";

import Icon from "react-native-vector-icons/AntDesign";

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.ticketHeader}>
          <Icon
            name="leftcircleo"
            size={30}
            color="#f8f8f8"
            style={{ marginLeft: 10, marginTop: 5 }}
          />
          <Text style={styles.ticketHeaderText}>Reservation</Text>
          <Icon
            name="printer"
            size={30}
            color="#f8f8f8"
            style={{ marginRight: 10, marginTop: 5 }}
          />
        </View>
        <View style={styles.ticketHeader2}>
          <Image
            source={require("./assets/resta-blue.png")}
            style={{ width: 60, height: 60, marginTop: 10 }}
          />
        </View>
        <View style={styles.ticket}>
          <View style={styles.ticketTop} />
          <View style={styles.ticketContainer}>
            <View style={styles.ticketDetailItem}>
              <Text>GUEST</Text>
              <Text style={styles.ticketDetailText}>Mher Sarkissian</Text>
            </View>
            <View style={styles.ticketDetailMultiItem}>
              <View>
                <Text>DATE</Text>
                <Text style={styles.ticketDetailText}>June 30, 2019</Text>
              </View>
              <View>
                <Text>TIME</Text>
                <Text style={styles.ticketDetailText}>21:00 </Text>
              </View>
            </View>
            <View style={styles.ticketDetailMultiItem}>
              <View>
                <Text>CLASS</Text>
                <Text style={styles.ticketDetailText}>Executive</Text>
              </View>
              <View>
                <Text>TABLE</Text>
                <Text style={styles.ticketDetailText}>210C</Text>
              </View>
            </View>
            <View style={styles.ticketDetailReservationBar}>
              <Text>RESERVATION CODE</Text>
              <Text style={styles.reservationConfirmationCode}>SL5 - K9A</Text>
              <View style={styles.confirmationBox}>
                <Text style={styles.confirmationBoxText}>PAID</Text>
              </View>
            </View>
            <View style={styles.reservationCodeContainer}>
              <View style={styles.leftDot} />
              <View style={styles.rightDot} />

              <Image
                source={require("./assets/bar.jpg")}
                style={{
                  width: 300,
                  height: 80,
                  marginTop: 10,
                  marginLeft: 5
                }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2C354C"
  },
  ticket: {
    flex: 1,
    width: "90%",
    fontSize: 20,
    textAlign: "center",
    borderTopWidth: 4,
    borderColor: "#EF851A"
  },

  ticketHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    height: 38
  },
  ticketHeaderText: {
    fontSize: 22,
    color: "#f8f8f8",
    fontWeight: "bold"
  },
  ticketHeader2: {
    alignItems: "center",
    marginBottom: 10
  },
  ticketTop: {
    height: 5,
    color: "#2C354C"
  },
  ticketContainer: {
    backgroundColor: "#f8f8f8",
    padding: 20,
    paddingTop: 10,
    height: 450
  },
  ticketDetailItem: {
    borderBottomWidth: 1,
    borderColor: "#E2E2E2",
    padding: 10
  },
  ticketDetailMultiItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#E2E2E2",
    padding: 10
  },
  ticketDetailText: {
    color: "#1F2020",
    fontWeight: "bold",
    marginTop: 5
  },
  ticketDetailReservationBar: {
    padding: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#E2E2E2"
  },
  reservationConfirmationCode: {
    color: "#F08519",
    fontSize: 22,
    fontWeight: "bold"
  },
  confirmationBox: {
    borderWidth: 1,
    borderColor: "#36C067",
    marginTop: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20
  },
  confirmationBoxText: {
    color: "#36C067",
    fontWeight: "bold"
  },
  reservationCodeContainer: {
    padding: 10
  },
  leftDot: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#2C354C",
    position: "absolute",
    left: -42,
    top: -20
  },
  rightDot: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#2C354C",
    position: "absolute",
    left: 332,
    top: -20
  }
});
