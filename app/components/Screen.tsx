import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import React from "react";

import { ScreenProps } from "../types";

function Screen(props: ScreenProps) {
  return (
    <SafeAreaView style={[styles.container, props.style]}>
      {props.children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    padding: 15,
  },
});

export default Screen;
