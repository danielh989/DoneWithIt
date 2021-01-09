import React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "react-native-expo-image-cache";

import AppText from "../components/AppText";
import ContactSellerForm from "../components/ContactSellerForm";
import ListItem from "../components/ListItem";
import params from "../config/params";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image
        style={styles.image}
        uri={listing.images[0].url}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
      ></Image>
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{"$" + listing.price}</AppText>
      </View>
      <View style={styles.listItem}>
        <ListItem
          image={require("../assets/user.jpg")}
          title="Danielle"
          subtitle="5 Listings"
        />
      </View>
      <ContactSellerForm listing={listing} />
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
