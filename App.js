import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NetInfo from "@react-native-community/netinfo";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import listings from "./app/api/listings";

export default function App() {
  //componentDidMount
  const unsubscribe = NetInfo.addEventListener((netInfo) =>
    console.log(netInfo)
  );
  //componentWillUnmount
  unsubscribe();

  return null;
  /*  { <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer> } */
}

const styles = StyleSheet.create({});
