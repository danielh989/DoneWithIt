import React from "react";
import { View, StyleSheet, Image } from "react-native";

import { colors, fontSizes } from "../config/params";
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
    margin: 15,
    overflow: "hidden",
  },
  image: { width: "100%", height: "75%" },
  textContainer: { backgroundColor: colors.white, margin: fontSizes.medium },
  title: { color: colors.black, fontSize: fontSizes.medium },
  subtitle: {
    color: colors.secondary,
    fontSize: fontSizes.small,
    marginTop: 4,
    fontWeight: "bold",
  },
});

export default Card;
