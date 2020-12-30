import React from "react";
import { StyleSheet } from "react-native";

import MessagesScreen from "./app/screens/MessagesScreen";
import AppIcon from "./app/components/AppIcon";

export default function App() {
  return <AppIcon name="trash-can" size={20} color="tomato" />;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "whitesmoke",
  },
});
