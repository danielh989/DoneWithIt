import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    loadListings();
  });

  const loadListings = async () => {
    const response = await listingsApi.getListings();
    setListings(response.data);
  };

  return (
    <Screen>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Card
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            title={item.title}
            subtitle={"$" + item.price}
            imageUrl={item.images[0].url}
          />
        )}
      />
    </Screen>
  );
}

export default ListingsScreen;
