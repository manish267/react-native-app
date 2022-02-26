import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import BackButton from "./../assets/images/Back-btn.png";
import BackgroundImg from "./../assets/images/MaskGroup14.png";

const Header = ({ title, children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundImg} style={styles.backgroundImage}>
        <LinearGradient
          colors={["#7B25E2", "#23A0D6"]}
          style={styles.headerGrad}
        >
          <View style={styles.header}>
            <Image source={BackButton} />
            <Text style={styles.headerHeading}>{title}</Text>
          </View>
        </LinearGradient>
        {children}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  headerGrad: {
    height: 100,
  },
  header: {
    marginTop: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerHeading: {
    marginLeft: 50,
    color: "#FFF",
  },
});
