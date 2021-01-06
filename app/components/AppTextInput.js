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
  return (
    <View style={[styles.container, { width }]}>
      <MaterialCommunityIcons
        color={color}
        name={iconName}
        style={styles.icon}
        size={20}
      ></MaterialCommunityIcons>
      <TextInput style={styles.text} {...otherProps}>
        {children}
      </TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: params.colors.lightgrey,
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  icon: {
    marginRight: 10,
  },
  text: {
    paddingVertical: 8,
  },
});

export default AppTextInput;
