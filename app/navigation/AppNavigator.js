import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";

import ListingEditScreen from "../screens/ListingEditScreen";
import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import NewListingButton from "./NewListingButton";
import routes from "./routes";
import expoPushTokensApi from "../api/expoPushTokens";
import navigation from "./rootNavigation";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  useEffect(() => {
    registerForPushNotifications();
    Notifications.addNotificationResponseReceivedListener((notification) => {
      navigation.navigate("Account");
    });
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;
      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.register(token.data);
    } catch (error) {
      console.log("Error getting push token", error);
    }
  };

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
};
const styles = StyleSheet.create({
  container: {},
});
export default AppNavigator;
