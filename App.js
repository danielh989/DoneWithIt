import React, { useEffect, useState } from "react";
import { StyleSheet, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

import Screen from "./app/components/Screen";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <Screen>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={(uri) => handleAdd(uri)}
        onRemoveImage={(uri) => handleRemove(uri)}
      ></ImageInputList>
    </Screen>
  );
}

const styles = StyleSheet.create({});
