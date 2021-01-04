import React from "react";
import { View, StyleSheet } from "react-native";
import params from "../config/params";
function ImageInput(props) {
  return <View style={styles.container}></View>;
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: params.colors.lightgrey,
    borderRadius: 15,
    justifyContent: "center",
    height: 100,
    width: 100,
  },
});
export default ImageInput;
