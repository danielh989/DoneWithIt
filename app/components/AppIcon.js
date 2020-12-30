import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppIcon({
  name,
  size = 40,
  backgroundColor = "black",
  iconColor = "white",
}) {
  return (
    <View
      style={[
        styles.icon,
        {
          height: size,
          width: size,
          borderRadius: size * 0.5,
          backgroundColor,
        },
      ]}
    >
      <MaterialCommunityIcons
        name={name}
        size={size * 0.5}
        color={iconColor}
      ></MaterialCommunityIcons>
    </View>
  );
}
const styles = StyleSheet.create({
  icon: {
    alignItems: "center",
    justifyContent: "center",
  },
});
export default AppIcon;
