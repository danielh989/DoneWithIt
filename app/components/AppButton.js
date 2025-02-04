import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import params from "../config/params";

function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: params.colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: params.colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 6,
    padding: 15,
    width: "100%",
  },
  text: {
    color: params.colors.white,
    fontSize: params.fontSizes.large,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
export default AppButton;
