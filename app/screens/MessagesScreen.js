import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

import ListItem from "../components/ListItem";
import ListItemActions from "../components/ListItemActions";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import { colors } from "../config/params";

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
    <Screen>
      <View>
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subtitle={item.description}
              image={item.image}
              renderRightActions={() => {
                return <ListItemActions></ListItemActions>;
              }}
              onPress={() => console.log("Hey!")}
            ></ListItem>
          )}
          ItemSeparatorComponent={() => {
            return <ListItemSeparator />;
          }}
        ></FlatList>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
