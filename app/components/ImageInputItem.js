import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import params from "../config/params";
function ImageInputItem({ iconName, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <MaterialCommunityIcons
          name={iconName}
          size={40}
        ></MaterialCommunityIcons>
      </TouchableWithoutFeedback>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: params.colors.lightgrey,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
});
export default ImageInputItem;
