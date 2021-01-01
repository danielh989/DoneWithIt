import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import params from "../config/params";
function AppPicker({
  iconName = "email",
  color: iconColor = "black",
  placeholder = "Category",
  ...otherProps
}) {
  return (
    <View style={styles.container}>
      {iconName && (
        <MaterialCommunityIcons
          color={iconColor}
          name={iconName}
          style={styles.icon}
          size={20}
        ></MaterialCommunityIcons>
      )}
      <AppText style={styles.text}>{placeholder}</AppText>
      <MaterialCommunityIcons
        color={iconColor}
        name="chevron-down"
        size={20}
      ></MaterialCommunityIcons>
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
    paddingHorizontal: 15,
    margin: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
