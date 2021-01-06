import React from "react";
import { FlatList } from "react-native-gesture-handler";

import Card from "../components/Card";
import Screen from "../components/Screen";
import routes from "../navigation/routes";

function ListingsScreen({ navigation }) {
  const items = [
    {
      title: "Listing 1",
      subtitle: "300",
      image: require("../assets/jacket.jpg"),
    },
    {
      title: "Listing 2",
      subtitle: "200",
      image: require("../assets/user.jpg"),
    },
  ];
  return (
    <Screen>
      <FlatList
        data={items}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Card
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            title={item.title}
            subtitle={"$" + item.subtitle}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

export default ListingsScreen;
