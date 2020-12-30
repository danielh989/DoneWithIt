import React from "react";
import { StyleSheet } from "react-native";

import AccountScreen from "./app/screens/AccountScreen";

export default function App() {
  return <AccountScreen></AccountScreen>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "whitesmoke",
  },
});
