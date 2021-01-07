import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import listings from "./app/api/listings";

export default function App() {
  const netInfo = useNetInfo();
  console.log(netInfo.isInternetReachable);

  return null;
  /*  { <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer> } */
}

const styles = StyleSheet.create({});
