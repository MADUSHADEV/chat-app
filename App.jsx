import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "./ui/Button";
import LineInput from "./ui/LineInput";
import { BUTTON } from "./constants/constants";

const screen = () => {
  const [test, setTest] = useState("test");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonDiv}>
        <LineInput
          inputLabel={"Lable Name"}
          placeholder={"Type your dirty secrets..."}
          onChange={setTest}
        ></LineInput>

        <Button
          title="Step On me daddy 💦"
          onPress={() => {
            Alert.alert("You Noty 😈", test);
          }}
        ></Button>
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
    justifyContent: "space-between",
    flexDirection: "column",
    alignContent: "space-between",
  },
});

export default screen;
