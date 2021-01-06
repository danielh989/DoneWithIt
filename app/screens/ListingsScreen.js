import React from "react";
import { FlatList } from "react-native-gesture-handler";

import Card from "../components/Card";
import Screen from "../components/Screen";
import { useNavigation } from "@react-navigation/native";

function ListingsScreen(props) {
  const items = [
    {
      title: "Listing 1",
      subtitle: "Subtitle 1",
      image: require("../assets/jacket.jpg"),
    },
    {
      title: "Listing 2",
      subtitle: "Subtitle 2",
      image: require("../assets/jacket.jpg"),
    },
  ];
  return (
    <Screen>
      <FlatList
        data={items}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Card
            onPress={() => console.log("Pressed")}
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

export default ListingsScreen;
