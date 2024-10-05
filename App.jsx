import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./ui/Button";
import { SafeAreaView } from "react-native-safe-area-context";

const screen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonDiv}>
        <Button />
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
    alignContent: "space-between",
  },
});

export default screen;
