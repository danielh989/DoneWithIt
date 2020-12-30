import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";

import { fontSizes, colors } from "../config/params";
import AppText from "./AppText";

function ListItem({ title, subtitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    flexDirection: "row",
  },
  image: { height: 60, width: 60, borderRadius: 30 },
  textContainer: { marginLeft: 15 },
  title: { fontSize: fontSizes.medium },
  subtitle: { color: colors.grey },
});

export default ListItem;
