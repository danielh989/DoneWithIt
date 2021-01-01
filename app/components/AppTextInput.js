import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import params from "../config/params";
function AppTextInput({ children, iconName = "email", color = "black" }) {
  console.log(children);
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        color={color}
        name={iconName}
        style={styles.icon}
        size={20}
      ></MaterialCommunityIcons>
      <TextInput>{children}</TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: params.colors.lightgrey,
    borderRadius: 10,
    height: 35,
    flexDirection: "row",
    paddingLeft: 15,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
