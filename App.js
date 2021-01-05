import React from "react";
import { Text, StyleSheet, Button } from "react-native";

import Screen from "./app/components/Screen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

export default function App() {
  const Link = () => {
    const navigation = useNavigation();
    return (
      <Screen>
        <Text>Tweets</Text>
        <Button
          title="View Tweet"
          onPress={() => navigation.navigate("TweetDetails")}
        ></Button>
      </Screen>
    );
  };

  const Tweets = ({ navigation }) => (
    <Screen>
      <Link></Link>
    </Screen>
  );
  const TweetDetails = () => (
    <Screen>
      <Text>TweetDetails</Text>
    </Screen>
  );

  const Stack = createStackNavigator();
  const StackNavigator = () => (
    <Stack.Navigator>
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen name="TweetDetails" component={TweetDetails} />
    </Stack.Navigator>
  );
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
