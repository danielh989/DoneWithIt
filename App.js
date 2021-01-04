import React, { useEffect, useState } from "react";
import { StyleSheet, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

import Screen from "./app/components/Screen";

export default function App() {
  const [imageUri, setImageUri] = useState();
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    } catch (error) {
      console.log("There was an error trying to load the image", error);
    }
  };
  return (
    <Screen>
      <Button title="Select Image" onPress={selectImage}></Button>
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    </Screen>
  );
}

const styles = StyleSheet.create({});
