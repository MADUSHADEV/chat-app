import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "./ui/Button";
import { BUTTON } from "./constants/constants";

const screen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonDiv}>
        <CustomButton buttonName={BUTTON.signIn} backgroundColor={"#24786D"} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
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
