import React from "react";
import { Platform, StyleSheet, Text } from "react-native";
function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: { fontSize: 14 },
  ...Platform.select({
    ios: {
      fontSize: 20,
      fontFamily: "Avenir",
    },
    android: {
      fontSize: 18,
    },
  }),
});
export default AppText;
