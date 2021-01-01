import React, { useState } from "react";
import { StyleSheet, Switch } from "react-native";

import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";

export default function App() {
  const categories = [
    { value: 1, label: "Entertainment" },
    { value: 2, label: "Music" },
    { value: 3, label: "Sports" },
  ];
  const [category, setCategory] = useState();
  return (
    <Screen>
      <AppPicker
        items={categories}
        iconName="apps"
        onSelectedItem={(item) => setCategory(item)}
        placeholder="Category"
        selectedItem={category}
      ></AppPicker>
      <AppTextInput placeholder="Email" iconName="email"></AppTextInput>
    </Screen>
  );
}

const styles = StyleSheet.create({});
