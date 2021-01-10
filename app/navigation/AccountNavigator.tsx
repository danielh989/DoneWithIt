import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
// @ts-ignore
import routes from "./routes";

const Stack = createStackNavigator();

const AccountNavigator = ({ navigation }: any) => (
  <Stack.Navigator>
    <Stack.Screen name={routes.ACCOUNT} component={AccountScreen} />
    <Stack.Screen name={routes.MY_MESSAGES} component={MessagesScreen} />
  </Stack.Navigator>
);

export type StackParamList = {
  Profile: undefined;
};

export default AccountNavigator;
