import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, StyleSheet } from "react-native";

import AppIcon from "../components/AppIcon";
import AccountScreen from "../screens/AccountScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import ListingsScreen from "../screens/ListingsScreen";
import FeedNavigator from "./FeedNavigator";
function AppNavigator(props) {
  const Tab = createBottomTabNavigator();
  return (
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
        component={FeedNavigator}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <AppIcon name="plus-circle" size={size * 2} color={"red"} />
          ),
          title: "",
        }}
        name="Add"
        component={ListingEditScreen}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
        name="Account"
        component={AccountScreen}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default AppNavigator;
