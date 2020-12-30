import React from "react";
import { StyleSheet } from "react-native";

import MessagesScreen from "./app/screens/MessagesScreen";
import AppIcon from "./app/components/AppIcon";
import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";

export default function App() {
  return (
    <Screen>
      <ListItem
        ImageComponent={<AppIcon name="email"></AppIcon>}
        subtitle="And Subtitle"
        title="The Title"
      ></ListItem>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "whitesmoke",
  },
});
