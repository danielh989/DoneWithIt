import React from "react";
import { View, StyleSheet } from "react-native";

function ListItemActions(props) {
  return <View style={styles.actions}></View>;
}

const styles = StyleSheet.create({
  actions: { backgroundColor: "tomato", width: 80 },
});

export default ListItemActions;
