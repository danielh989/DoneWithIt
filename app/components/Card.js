import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Constants from "expo-constants";

import colors from "../config/colors";
import AppText from "../components/AppText";

function Card({ title, subtitle, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    height: 260,
    marginTop: Constants.statusBarHeight,
    margin: 15,
    overflow: "hidden",
  },
  image: { width: "100%", height: "75%" },
  textContainer: { backgroundColor: colors.white, margin: 15 },
  title: { color: colors.black, fontSize: 15 },
  subtitle: {
    color: colors.secondary,
    fontSize: 14,
    marginTop: 4,
    fontWeight: "bold",
  },
});

export default Card;
