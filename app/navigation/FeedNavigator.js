import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingsScreen from "../screens/ListingsScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name={routes.LISTINGS}
      options={{ headerShown: false }}
      component={ListingsScreen}
    />
    <Stack.Screen
      name={routes.LISTING_DETAILS}
      component={ListingDetailsScreen}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
