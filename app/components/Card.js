import React from "react";
import { View, StyleSheet, Image } from "react-native";

import params from "../config/params";
import AppText from "../components/AppText";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function Card({ title, subtitle, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <View style={styles.textContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{subtitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: params.colors.white,
    borderRadius: 15,
    height: 260,
    margin: 15,
    overflow: "hidden",
  },
  image: { width: "100%", height: "75%" },
  textContainer: {
    backgroundColor: params.colors.white,
    margin: params.fontSizes.medium,
  },
  title: { color: params.colors.black, fontSize: params.fontSizes.medium },
  subtitle: {
    color: params.colors.secondary,
    fontSize: params.fontSizes.small,
    marginTop: 4,
    fontWeight: "bold",
  },
});

export default Card;
