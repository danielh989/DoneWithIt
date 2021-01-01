import React from "react";
import { Image, View, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import params from "../config/params";

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
      <View style={styles.listItem}>
        <ListItem
          image={require("../assets/user.jpg")}
          title="Danielle"
          subtitle="5 Listings"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailContainer: { margin: 15, marginLeft: 20 },
  image: { width: "100%", height: 300 },
  listItem: { marginLeft: 15 },
  price: {
    color: params.colors.secondary,
    fontSize: params.fontSizes.large,
    fontWeight: "bold",
    marginTop: 6,
  },
  title: { fontSize: params.fontSizes.large },
});

export default ListingDetailsScreen;
