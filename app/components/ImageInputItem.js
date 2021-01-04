import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import params from "../config/params";
function ImageInputItem({ iconName, onPress, uri }) {
  console.log(uri);
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        {uri && <Image source={{ uri }}></Image>}
        {!uri && (
          <MaterialCommunityIcons
            name={iconName}
            size={40}
          ></MaterialCommunityIcons>
        )}
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
