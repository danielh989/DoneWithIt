import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import params from "../config/params";
function AppTextInput({
  children,
  iconName,
  color = "black",
  width = "100%",
  ...otherProps
}) {
  console.log({ width });
  return (
    <View style={[styles.container, { width }]}>
      <MaterialCommunityIcons
        color={color}
        name={iconName}
        style={styles.icon}
        size={20}
      ></MaterialCommunityIcons>
      <TextInput {...otherProps}>{children}</TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: params.colors.lightgrey,
    borderRadius: 10,
    height: 45,
    flexDirection: "row",
    paddingLeft: 15,
    margin: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
