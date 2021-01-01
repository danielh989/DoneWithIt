import React, { useState } from "react";
import { StyleSheet, Switch } from "react-native";

import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";

export default function App() {
  const [isNew, setIsNew] = useState(false);
  return (
    <Screen>
      <Switch
        value={isNew}
        onValueChange={(newValue) => {
          console.log(newValue);
          setIsNew(newValue);
        }}
      ></Switch>
    </Screen>
  );
}

const styles = StyleSheet.create({});
