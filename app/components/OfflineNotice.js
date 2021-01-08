import React from "react";
import { View, StyleSheet } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";
import Constants from "expo-constants";

import params from "../config/params";
import AppText from "./AppText";
function OfflineNotice(props) {
  const netInfo = useNetInfo();
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>You're currently offline</AppText>
      </View>
    );
  }
  return null;
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: params.colors.primary,
    justifyContent: "center",
    height: 30,
    top: Constants.statusBarHeight,
    position: "absolute",
    width: "100%",
    zIndex: 1,
    elevation: 1,
  },
  text: {
    color: "white",
  },
});
export default OfflineNotice;
