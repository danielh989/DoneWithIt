import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import AppIcon from "../components/AppIcon";
import params from "../config/params";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import authStorage from "../auth/storage";
import useAuth from "../hooks/useAuth";

function AccountScreen({ navigation }) {
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    setUser(null);
    authStorage.removeToken();
  };

  const menuItems = [
    {
      title: "My Listings",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: params.colors.primary,
      },
    },
    {
      title: "My Messages",
      targetScreen: routes.MY_MESSAGES,
      icon: {
        name: "email",
        backgroundColor: params.colors.secondary,
      },
    },
  ];
  return (
    <Screen style={{ backgroundColor: params.colors.lightgrey }}>
      <View style={{ backgroundColor: params.colors.white }}>
        <ListItem
          title={user.name}
          subtitle={user.email}
          image={require("../assets/user.jpg")}
        />
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => {
            return (
              <ListItem
                title={item.title}
                onPress={() => navigation.navigate(item.targetScreen)}
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
      <View style={{ backgroundColor: params.colors.white }}>
        <ListItem
          title="Log Out"
          onPress={handleLogout}
          ImageComponent={
            <AppIcon name="logout" backgroundColor={params.colors.khaki} />
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
    backgroundColor: params.colors.white,
  },
});

export default AccountScreen;
