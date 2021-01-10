import { FlatList, StyleSheet, View } from "react-native";
import React, { useState } from "react";

import ListItem from "../components/ListItem";
// @ts-ignore
import ListItemActions from "../components/ListItemActions";
// @ts-ignore
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import { MessageProps } from "../types";

const initialMessages = [
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
function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message: MessageProps) => {
    const newMessages = messages.filter((m) => m.id != message.id);
    setMessages(newMessages);
    return message.id;
  };

  return (
    <Screen>
      <View>
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id.toString()}
          onRefresh={() => {
            setMessages([
              {
                id: 2,
                title: "T2",
                description: "D2",
                image: require("../assets/user.jpg"),
              },
            ]);
          }}
          refreshing={refreshing}
          renderItem={({ item }) => (
            <ListItem
              image={item.image}
              onPress={() => console.log()}
              renderRightActions={() => {
                return (
                  <ListItemActions
                    onPress={() =>
                      console.log("Deleted item ", handleDelete(item))
                    }
                  ></ListItemActions>
                );
              }}
              subtitle={item.description}
              title={item.title}
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
