import React, { useEffect, useState } from "react";
import { View } from "react-native";
import * as Yup from "yup";

import listingsApi from "../api/listings";
import CategoryPickerItem from "../components/CategoryPickerItem";
import {
  AppFormField,
  AppForm,
  SubmitButton,
  AppFormPicker,
} from "../components/Forms";
import FormImagePicker from "../components/Forms/FormImagePicker";
import Screen from "../components/Screen";
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";

function ListingEditScreen(props) {
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save the listing.");
    }
    resetForm();
  };

  const validationSchema = Yup.object().shape({
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    price: Yup.number().min(1).max(1000).required().label("Price"),
    title: Yup.string().required().min(1).label("Title"),
    images: Yup.array().min(1, "Please select at least one image"),
  });
  const categories = [
    {
      label: "Fruits & Vegetables",
      value: 1,
      iconName: "email",
      backgroundColor: "red",
    },
    { label: "Dairy", value: 2, iconName: "account", backgroundColor: "green" },
    { label: "Cereals", value: 3, iconName: "laptop", backgroundColor: "blue" },
  ];
  return (
    <Screen>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        visible={uploadVisible}
        progress={progress}
      />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField name="title" maxLangth={255} placeholder="Title" />
        <View>
          <AppFormField
            name="price"
            keyboardType="numeric"
            maxLangth={8}
            placeholder="Price"
            width="50%"
          />
          <AppFormPicker
            name="category"
            placeholder="Category"
            numColumns={3}
            PickerItemComponent={CategoryPickerItem}
            items={categories}
            width="50%"
          />
        </View>
        <AppFormField
          name="description"
          placeholder="Description"
          multiline
          numberOfLine={3}
        />
        <SubmitButton title="Upload" />
      </AppForm>
    </Screen>
  );
}

export default ListingEditScreen;
