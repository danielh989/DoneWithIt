import React from "react";
import { StyleSheet } from "react-native";

import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <Screen>
      <AppTextInput></AppTextInput>
    </Screen>
  );
}

const styles = StyleSheet.create({});
