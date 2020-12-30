import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppIcon({ name, size, color }) {
  const SIZE_FACTOR = 30;
  return (
    <View
      style={[
        styles.icon,
        {
          height: size + SIZE_FACTOR,
          width: size + 30,
          borderRadius: (size + 30) / 2,
          backgroundColor: color,
        },
      ]}
    >
      <MaterialCommunityIcons name={name} size={size}></MaterialCommunityIcons>
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
