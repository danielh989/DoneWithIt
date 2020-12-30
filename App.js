import React from "react";
import { StyleSheet, View } from "react-native";

import Card from "./app/components/Card";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import colors from "./app/config/colors";

export default function App() {
  return (
    <View style={styles.card}>
      <Card
        title="Green jacket for sale!"
        subtitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "whitesmoke",
  },
});
