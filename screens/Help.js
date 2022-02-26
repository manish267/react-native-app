import Header from "./../components/Header";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import GameLogo from "./../assets/images/GameLogo.png";

const Help = () => {
  return (
    <Header title="Help">
      <ScrollView>
        <Text style={styles.pageHeading}>Help</Text>
        <View style={styles.gameLogo}>
          <Image source={GameLogo} />

          <Text style={styles.pageText}>Contact No.</Text>
          <Text style={styles.contactNum}>1800-123-4567</Text>

          <Text style={styles.pageText}>Email ID</Text>
          <Text style={styles.contactNum}>help@speedandknowledge.com</Text>
        </View>
      </ScrollView>
    </Header>
  );
};

const styles = StyleSheet.create({
  pageHeading: {
    textAlign: "center",
    marginTop: 12,
    color: "#fff",
    fontSize: 25,
  },
  pageText: {
    color: "#fff",
    fontSize: 15,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  gameLogo: {
    alignItems: "center",
    marginTop: 30,
  },
  contactNum: {
    color: "#fff",
    fontSize: 20,
  },
});

export default Help;
