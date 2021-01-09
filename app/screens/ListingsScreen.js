import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

import Card from "../components/Card";
import ActivityIndicator from "../components/ActivityIndicator";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const getListingsApi = useApi(listingsApi.getListings);
  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <>
      <ActivityIndicator visible={getListingsApi.loading} />
      <Screen>
        {getListingsApi.error && (
          <>
            <AppText>Couldn's retrieve the listings.</AppText>
            <AppButton
              title="Retry"
              onPress={getListingsApi.loadListings}
            ></AppButton>
          </>
        )}
        <FlatList
          data={getListingsApi.data}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <Card
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              title={item.title}
              subtitle={"$" + item.price}
              imageUrl={item.images[0].url}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
        />
      </Screen>
    </>
  );
}

export default ListingsScreen;
