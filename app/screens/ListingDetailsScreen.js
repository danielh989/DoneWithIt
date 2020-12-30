import React from "react";
import { Image, View, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import { colors, fontSizes } from "../config/params";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/jacket.jpg")}
      ></Image>
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>Green jacket for sale!</AppText>
        <AppText style={styles.price}>$100</AppText>
      </View>
      <ListItem
        image={require("../assets/user.jpg")}
        title="Danielle"
        subtitle="5 Listings"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: { width: "100%", height: 300 },
  detailContainer: { margin: 15, marginLeft: 20 },
  title: { fontSize: fontSizes.large },
  price: {
    color: colors.secondary,
    fontSize: fontSizes.large,
    fontWeight: "bold",
    marginTop: 6,
  },
});

export default ListingDetailsScreen;
