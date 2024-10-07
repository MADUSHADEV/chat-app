import React, { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "./ui/Button";
import LineInput from "./ui/LineInput";
import { BUTTON } from "./constants/constants";
import BoxInput from "./ui/BoxInput";
import Avatar from "./ui/Avatar";
import Header from "./components/Header";

const screen = () => {
  const [image, setImage] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonDiv}>
        <Header />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontSize: 20,
  },
  buttonDiv: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignContent: "space-between",
  },
});

export default screen;
