import React from "react";
import { ImageBackground, StyleSheet, View, Text, Image } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/bedroom.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/icon.png")} />
        <Text>Sell what you don't need</Text>
      </View>
      <View style={styles.loginButton} />
      <View style={styles.registerButton} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#FB9F8B",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 6,
  },
  logoContainer: {
    top: "20%",
    position: "absolute",
    alignItems: "center",
  },
  registerButton: { width: "100%", height: 50, backgroundColor: "#077B88" },
});

export default WelcomeScreen;
