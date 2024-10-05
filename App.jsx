import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SignInButton from "./components/SignInButton";
import { SafeAreaView } from "react-native-safe-area-context";
import SignUpButton from "./components/SignUpButton";

const screen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonDiv}>
        <SignInButton />
        <SignUpButton />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontSize: 20,
  },
  buttonDiv: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignContent:"space-between"
  },
});

export default screen;
