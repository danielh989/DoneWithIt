import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";
function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "white",
    opacity: 0.8,
    width: "100%",
    height: "100%",
    zIndex: 1,
    elevation: 1,
  },
});
export default ActivityIndicator;
