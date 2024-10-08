import React, { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BoxInput from "./ui/BoxInput";
import LeftChat from "./ui/LeftChat";
import RightChat from "./ui/RightChat";
import MessageSendBox from "./components/MessageSendBox";
import Chat from "./screens/Chat";
import Home from "./screens/Home";
import { Title } from "./ui/Title";
import Avatar from "./ui/Avatar";
import { Navigation } from "./components/Navigation";

const screen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.buttonDiv}>
        <Navigation />
      </View> */}
      <Chat />
    </SafeAreaView>
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
