import React from "react";
import { View, StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import ImageInputList from "../ImageInputList";

function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...imagesUris, uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imagesUris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage />
    </>
  );
}
const styles = StyleSheet.create({});
export default FormImagePicker;
