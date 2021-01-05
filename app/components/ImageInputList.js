import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        {console.log(imageUris)}
        {imageUris.map((uri) => (
          <ImageInput
            key={uri} //for Map method
            imageUri={uri}
            onChangeImage={() => onRemoveImage(uri)} //Not the same as  onChangeImage={onRemoveImage(uri)}
            //Aca se quiere enviar la uri del mapa, no la uri de quien envia la funcion, que en este caso seria nula.
            //Por eso los () van vacios
          />
        ))}
        <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
export default ImageInputList;
