import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import listings from "./app/api/listings";

export default function App() {
  listings.getListings().then((response) => {
    if (!response.ok) {
      console.log(response.problem);
    } else {
      console.log(response);
    }
  });
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
