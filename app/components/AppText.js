import React from "react";
import { StyleSheet, Text } from "react-native";

import params from "../config/params";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: { fontSize: params.fontSizes.small, color: params.colors.black },
});
export default AppText;
