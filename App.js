import React from "react";
import { Text, StyleSheet, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./app/components/Screen";

export default function App() {
  const Link = () => {
    const navigation = useNavigation();
    return (
      <Screen>
        <Text>Tweets</Text>
        <Button
          title="View Tweet"
          onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
        ></Button>
      </Screen>
    );
  };

  const Tweets = ({ navigation }) => (
    <Screen>
      <Link></Link>
    </Screen>
  );
  const TweetDetails = ({ route }) => (
    <Screen>
      <Text>TweetDetails {route.params.id}</Text>
    </Screen>
  );

  const Stack = createStackNavigator();
  const StackNavigator = () => (
    <Stack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: "dodgerblue" } }}
    >
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen
        options={({ route }) => ({ title: "Tweet Id: " + route.params.id })}
        name="TweetDetails"
        component={TweetDetails}
        options={{ headerStyle: { backgroundColor: "tomato" } }}
      />
    </Stack.Navigator>
  );

  const Account = () => (
    <Screen>
      <Text>Account</Text>
    </Screen>
  );
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
            <MaterialCommunityIcons
              name="home"
              size={size}
              color={color}
            ></MaterialCommunityIcons>
          ),
        }}
        name="Feed"
        component={Tweets}
      ></Tab.Screen>
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="account"
              size={size}
              color={color}
            ></MaterialCommunityIcons>
          ),
        }}
        name="Feed"
        name="Account"
        component={Account}
      ></Tab.Screen>
    </Tab.Navigator>
  );
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
