import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import params from "../config/params";

function NewListingButton({ onPress }) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <MaterialCommunityIcons
          name="plus-circle"
          size={35}
          color={params.colors.white}
        ></MaterialCommunityIcons>
      </TouchableWithoutFeedback>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderWidth: 10,
    borderColor: params.colors.white,
    backgroundColor: params.colors.primary,
    borderRadius: 40,
    bottom: 25,
    justifyContent: "center",
    height: 80,
    width: 80,
  },
});
export default NewListingButton;
