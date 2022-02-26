import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import HomeImg from "./../assets/images/MaskGroup2.jpg";
import GameLogo from "./../assets/images/GameLogo.png";
import { LinearGradient } from "expo-linear-gradient";
import SmallImg from "./../assets/images/small-Icon.png";

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={HomeImg}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={{ alignItems: "center", marginTop: 70, marginBottom: 20 }}>
          <Text style={{ fontSize: 30, color: "#B461AF" }}>Welcome To</Text>
          <Text style={{ fontSize: 30, color: "#8127D5" }}>
            Speed & Knowledge
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            backgroundColor: "transparent",
            flex: 0.8,
          }}
        >
          <Image source={GameLogo} />
        </View>
        <View
          style={{
            alignItems: "center",
            height: "auto",
          }}
        >
          <View
            style={{
              width: "90%",
              height: 220,
              alignItems: "center",
              borderRadius: 20,
            }}
          >
            <LinearGradient
              colors={["#973D8C", "#252863"]}
              style={styles.linearGradient}
            >
              <View style={{ alignItems: "center" }}>
                <Text style={styles.buttonText}>Sign In</Text>
                <Text style={styles.buttonTextBlue}>Sign Up</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "90%",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  {/* ICONS */}
                  <View style={{ width: "47%", alignItems: "center" }}>
                    <LinearGradient
                      colors={["#E34D88", "#DD1B5D"]}
                      style={{
                        width: "100%",
                        alignItems: "center",
                        borderColor: "#C91653",
                        borderWidth: 2,
                        borderRadius: 9,
                      }}
                    >
                      <Text
                        style={{
                          color: "#FFF",
                          fontSize: 30,
                          position: "relative",
                        }}
                      >
                        g{" "}
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          position: "absolute",
                          right: 25,
                          color: "#fff",
                        }}
                      >
                        +
                      </Text>
                    </LinearGradient>
                  </View>
                  <View
                    style={{
                      width: "47%",
                    }}
                  >
                    <View
                      style={{
                        width: "100%",
                        alignItems: "center",
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => console.log("btn pressed")}
                        style={{ width: "100%", position: "relative" }}
                      >
                        <View style={styles.buttonParent}>
                          <LinearGradient
                            colors={["#FFF", "#E34D88", "#E34D88"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 0.5 }}
                            style={styles.buttonGrad}
                          >
                            <Image
                              source={SmallImg}
                              style={{
                                position: "absolute",
                                margin: 1,
                              }}
                            />

                            <Text
                              style={{
                                fontSize: 25,
                                textAlign: "center",
                                color: "#fff",
                                paddingTop: 10,
                              }}
                            >
                              Yes
                            </Text>
                            <LinearGradient
                              colors={["#E34D88", "#E34D88", "#1b1c1c"]}
                              start={{ x: 0, y: 0.5 }}
                              end={{ x: 0, y: 1 }}
                              style={{
                                height: 5,
                                bottom: -5,
                              }}
                            ></LinearGradient>
                          </LinearGradient>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderRadius: 20,
    width: "85%",
  },
  buttonText: {
    width: "90%",
    borderRadius: 10,
    fontSize: 25,
    textAlign: "center",
    paddingBottom: 5,
    marginTop: 10,
    color: "#07213E",
    backgroundColor: "#FFFFFF",
    borderColor: "#BBBEC1",
    borderWidth: 2,
  },
  buttonTextBlue: {
    width: "90%",
    borderRadius: 10,
    fontSize: 25,
    paddingBottom: 5,
    borderColor: "#2D8FB4",
    borderWidth: 2,
    textAlign: "center",
    margin: 10,
    color: "#FFFFFF",
    backgroundColor: "#28D0FD",
  },
  appButtonContainer: {
    elevation: 30,
    backgroundColor: "#E34D88",
    // borderRadius: 10,
    // paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    opacity: 1,
  },
  buttonGrad: {
    height: "100%",
    borderRadius: 6,
    // position: "absolute",
    // bottom: 5,
  },
  buttonParent: {
    height: 70,
    // borderRadius: 10,
    borderWidth: 3,
    borderColor: "#C91653",
    borderRadius: 9,
    // backgroundColor: "#024e51",
  },
});

export default Home;
