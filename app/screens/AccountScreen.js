import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import AppIcon from "../components/AppIcon";
import { colors } from "../config/params";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";

function AccountScreen(props) {
  const menuItems = [
    {
      title: "My Listings",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: colors.primary,
      },
    },
    {
      title: "My Messages",
      icon: {
        name: "email",
        backgroundColor: colors.secondary,
      },
    },
  ];
  return (
    <Screen style={{ backgroundColor: colors.lightgrey }}>
      <View style={{ backgroundColor: colors.white }}>
        <ListItem
          title="Danielle Johns"
          subtitle="danielle@aol.com"
          image={require("../assets/user.jpg")}
        />
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.name}
          renderItem={({ item }) => {
            return (
              <ListItem
                title={item.title}
                ImageComponent={
                  <AppIcon
                    title={item.title}
                    backgroundColor={item.icon.backgroundColor}
                    name={item.icon.name}
                  />
                }
              />
            );
          }}
        />
      </View>
      <View style={{ backgroundColor: colors.white }}>
        <ListItem
          title="Log Out"
          ImageComponent={
            <AppIcon name="logout" backgroundColor={colors.khaki} />
          }
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: colors.white,
  },
});

export default AccountScreen;
