import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import params from "../config/params";
function ImageInput({ imageUri }) {
  return (
    <View style={styles.container}>
      {!imageUri && (
        <MaterialCommunityIcons
          name="camera"
          color="black"
          size={40}
        ></MaterialCommunityIcons>
      )}
      {imageUri && (
        <Image source={{ uri: imageUri }} style={styles.image}></Image>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: params.colors.lightgrey,
    borderRadius: 15,
    justifyContent: "center",
    height: 100,
    width: 100,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ImageInput;
