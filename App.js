import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import AppIcon from "./app/components/AppIcon";
import params from "./app/config/params";
import ListingsScreen from "./app/screens/ListingsScreen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

export default function App() {
  const Tab = createBottomTabNavigator();
  const TabNavigator = () => (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: "tomato",
        activeTintColor: "white",
        inactiveBackgroundColor: "#eee",
        inactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
        name="Feed"
        component={ListingsScreen}
      ></Tab.Screen>

      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <AppIcon name="plus-circle" size={size * 2} color={"red"} />
          ),
          title: "",
        }}
        name="Add"
        component={ListingEditScreen}
      ></Tab.Screen>

      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
        name="Account"
        component={AccountScreen}
      ></Tab.Screen>
    </Tab.Navigator>
  );
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
