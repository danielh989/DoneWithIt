import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";

export default function App() {
  {
    return (
      <>
        <OfflineNotice></OfflineNotice>
        <NavigationContainer theme={navigationTheme}>
          <AuthNavigator />
        </NavigationContainer>
      </>
    );
  }
}

const styles = StyleSheet.create({});
