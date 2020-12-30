import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../config/params";

function ListItemActions(props) {
  return (
    <View style={styles.actions}>
      <MaterialCommunityIcons name="trash-can" size={35} color={colors.white} />
    </View>
  );
}

const styles = StyleSheet.create({
  actions: {
    backgroundColor: "tomato",
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ListItemActions;
