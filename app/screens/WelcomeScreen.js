import React from "react";
import { ImageBackground, StyleSheet, View, Image } from "react-native";

import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={0.8}
      style={styles.background}
      source={require("../assets/bedroom.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/icon.png")} />
        <AppText>Sell what you don't need</AppText>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
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
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
});

export default WelcomeScreen;
