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

const PrivacyPolicy = () => {
  return (
    <Header title="Privacy Policy">
      <ScrollView>
        <Text style={styles.pageHeading}>Privacy Policy</Text>

        <Text style={styles.pageText}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </Text>
        <Text style={styles.pageText}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet{" "}
        </Text>
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
    marginVertical: 10,
  },
});

export default PrivacyPolicy;
