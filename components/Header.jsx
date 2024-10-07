import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import Avatar from "../ui/Avatar";

const Header = ({ username, lastSeen, navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.back}
        onPress={() => {
          navigation.goBack();
          console.log("back");
          Alert.alert("<= Back");
        }}
      >
        <Ionicons name="arrow-back" size={20} color="#000" />
      </Pressable>

      <View style={styles.boxContainer}>
        <Avatar />
        <View style={styles.nameBox}>
          <Text style={styles.name}>Name</Text>
          <Text style={styles.status}>Active</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    backgroundColor: "red",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  boxContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 10,
    flexGrow: 1,
    backgroundColor: "orange",
  },

  nameBox: {
    display: "flex",
    backgroundColor: "red",
    paddingVertical: 5,
    height: "100%",
  },
});

export default Header;
