import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, StyleSheet } from "react-native";

import AppIcon from "../components/AppIcon";
import AccountScreen from "../screens/AccountScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import ListingsScreen from "../screens/ListingsScreen";
import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import NewListingButton from "./NewListingButton";
import routes from "./routes";
function AppNavigator(props) {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
        name={routes.FEED}
        component={FeedNavigator}
      />

      <Tab.Screen
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT_SCREEN)}
            />
          ),
        })}
        name={routes.LISTING_EDIT_SCREEN}
        component={ListingEditScreen}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
        name={routes.ACCOUNT}
        component={AccountNavigator}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default AppNavigator;
