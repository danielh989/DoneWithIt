import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { colors } from "../config/params";

function ListItemActions({ onPress }) {
  return (
    <View style={styles.actions}>
      <TouchableWithoutFeedback style={styles.actions} onPress={onPress}>
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={colors.white}
        />
      </TouchableWithoutFeedback>
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
