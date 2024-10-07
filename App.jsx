import React, { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BoxInput from "./ui/BoxInput";
import LeftChat from "./ui/LeftChat";
import RightChat from "./ui/RightChat";
import MessageSendBox from "./components/MessageSendBox";
import Chat from "./screens/Chat";

const screen = () => {
  return (
    // <SafeAreaView style={styles.container}>
    // <View style={styles.buttonDiv}>
    <Chat />
    // </View>
    // </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "black",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     color: "black",
//     fontSize: 20,
//   },
//   buttonDiv: {
//     width: "100%",
//     display: "flex",
//     justifyContent: "space-between",
//     flexDirection: "column",
//     alignContent: "space-between",
//   },
// });

export default screen;
