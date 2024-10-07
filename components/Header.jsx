import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

const Header = ({ userId }) => {
  return (
    <View style={styles.container}>
      <Pressable />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Header;
