import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    const response = await listingsApi.getListings();
    if (!response.ok) return setError(true);
    setError(false);
    setListings(response.data);
  };

  return (
    <Screen>
      {error && (
        <>
          <AppText>Couldn's retrieve the listings.</AppText>
          <AppButton title="Retry" onPress={loadListings}></AppButton>
        </>
      )}
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
