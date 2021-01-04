import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ImageInputItem from "./ImageInputItem";

function ImageInput(props) {
  return (
    <View style={styles.container}>
      <ImageInputItem iconName="camera"></ImageInputItem>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default ImageInput;
