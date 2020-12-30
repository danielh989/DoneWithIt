import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";

import { colors } from "../config/params";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.closeButton}></View>
        <View style={styles.deleteButton}></View>
      </View>
      <Image
        style={styles.image}
        source={require("../assets/chair.jpg")}
      ></Image>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { alignItems: "center" },
  buttonContainer: {
    marginTop: Constants.statusBarHeight,
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
  },
  closeButton: {
    backgroundColor: colors.secondary,
    height: 50,
    width: 50,
  },
  deleteButton: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
  },
  image: { width: "100%", top: 50 },
});
export default ViewImageScreen;
