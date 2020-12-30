import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/AppText";

import { colors, fontSizes } from "../config/params";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/jacket.jpg")}
      ></Image>
      <View style={styles.detailTexts}>
        <AppText style={styles.title}>Green jacket for sale!</AppText>
        <AppText style={styles.price}>$100</AppText>
      </View>
      <View style={styles.uploader}>
        <Image
          style={styles.avatar}
          source={require("../assets/user.jpg")}
        ></Image>
        <View style={styles.userTexts}>
          <AppText style={styles.name}>Danielle</AppText>
          <AppText style={styles.listings}>5 Listings</AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: { width: "100%", height: 300 },
  detailTexts: { margin: 15, marginLeft: 20 },
  title: { fontSize: fontSizes.large },
  price: {
    color: colors.secondary,
    fontSize: fontSizes.large,
    fontWeight: "bold",
    marginTop: 6,
  },
  uploader: { margin: 20, flexDirection: "row" },
  avatar: { height: 60, width: 60, borderRadius: 30 },
  userTexts: { marginLeft: 15 },
  name: { fontSize: fontSizes.medium },
  listings: { color: colors.grey },
});

export default ListingDetailsScreen;
