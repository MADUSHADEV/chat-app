import React, { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import Chat from "./screens/Chat";
import { Navigation } from "./components/Navigation";
import { createStackNavigator } from "@react-navigation/stack";
import { SignIn } from "./screens/SignIn";
import { NavigationContainer } from "@react-navigation/native";
import { SignUp } from "./screens/SignUp";

const Stack = createStackNavigator();

const screen = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerShown: false, // Hide the header if you don't want it on SignIn or Home screens
        }}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="App" component={Navigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  text: {
    color: "black",
    fontSize: 20,
  },
  buttonDiv: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignContent: "space-between",
  },
});

export default screen;
