import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";

import * as colors from "../colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Image style={styles.deleteButton}></Image>
        <Image style={styles.closeButton}></Image>
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
  closeButton: { height: 50, width: 50, backgroundColor: colors.secondary },
  deleteButton: { height: 50, width: 50, backgroundColor: colors.primary },
  image: { width: "100%", top: 50 },
});
export default ViewImageScreen;
