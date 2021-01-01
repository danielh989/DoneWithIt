import React, { useState } from "react";
import { StyleSheet, Switch } from "react-native";

import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <Screen>
      <AppPicker iconName="apps" placeholder="Category"></AppPicker>
      <AppTextInput placeholder="Email" iconName="email"></AppTextInput>
    </Screen>
  );
}

const styles = StyleSheet.create({});
