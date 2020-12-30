import React from "react";
import { StyleSheet } from "react-native";

import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  return <ListingDetailsScreen />;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "whitesmoke",
  },
});
