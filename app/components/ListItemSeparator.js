import React from "react";
import { StyleSheet, View } from "react-native";

import params from "../config/params";

function ListItemSeparator() {
  return <View style={styles.separator}></View>;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: params.colors.lightgrey,
  },
});

export default ListItemSeparator;
