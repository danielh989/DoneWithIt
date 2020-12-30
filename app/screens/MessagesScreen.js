import React, { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";

import ListItem from "../components/ListItem";
import ListItemActions from "../components/ListItemActions";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import { colors } from "../config/params";

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
function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
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
              onPress={() => console.log("Hey!")}
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
