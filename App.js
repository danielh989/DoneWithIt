import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import listings from "./app/api/listings";

export default function App() {
  {
    return (
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
