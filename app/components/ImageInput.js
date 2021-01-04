import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import ImageInputItem from "./ImageInputItem";
import { FlatList } from "react-native-gesture-handler";

function ImageInput(props) {
  const [images, setImages] = useState([]);
  const requestImagePermission = async () => {
    try {
      const result = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (result.granted) {
        const image = await ImagePicker.launchImageLibraryAsync();
        images.push({ uri: image.uri });
        setImages(images);
      }
    } catch (error) {
      alert("There was an error requesting the image.");
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item) => item.uri}
        renderItem={(item) => {
          console.log(item.uri);
          <ImageInputItem uri={item.uri}></ImageInputItem>;
        }}
      ></FlatList>
      <ImageInputItem
        iconName="camera"
        onPress={requestImagePermission}
      ></ImageInputItem>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default ImageInput;
