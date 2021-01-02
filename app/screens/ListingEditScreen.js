import React from "react";
import { View } from "react-native";
import * as Yup from "yup";

import {
  AppFormField,
  AppForm,
  SubmitButton,
  AppFormPicker,
} from "../components/Forms";
import Screen from "../components/Screen";

function ListingEditScreen(props) {
  const validationSchema = Yup.object().shape({
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    price: Yup.number().min(1).max(1000).required().label("Price"),
    title: Yup.string().required().min(1).label("Title"),
  });
  const categories = [
    { label: "Fruits", value: 1 },
    { label: "Dairy", value: 2 },
    { label: "Cereals", value: 3 },
  ];
  return (
    <Screen>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log({ values })}
        validationSchema={validationSchema}
      >
        <AppFormField name="title" maxLangth={255} placeholder="Title" />
        <View style={{ flexDirection: "row" }}>
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
