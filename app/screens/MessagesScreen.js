import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import ListItem from "../components/ListItem";

function MessagesScreen(props) {
  const messages = [
    {
      id: 1,
      title: "T1",
      description: "D1",
      image: require("../assets/user.jpg"),
    },
    {
      id: 2,
      title: "T2",
      description: "D2",
      image: require("../assets/user.jpg"),
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
          ></ListItem>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
});

export default MessagesScreen;
