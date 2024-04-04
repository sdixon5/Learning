import React from "react";
import { Text, SafeAreaView, StyleSheet, Button, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Homepage } from "./Homepage";
import { Image } from "./Image";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Homepage}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Image" component={Image} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
