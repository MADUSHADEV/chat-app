import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import Avatar from "../ui/Avatar";
import { THEME } from "../constants/constants";

const Header = ({
  username = "User",
  image,
  lastSeen = "Last seen a long time ago",
  avatar = {},
  navigation,
}) => {
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
        <Ionicons
          style={styles.icon}
          name="arrow-back"
          size={styles.iconSize}
          color="#000"
        />
      </Pressable>

      <View style={styles.boxContainer}>
        <Avatar
          uri={avatar.uri}
          type={avatar.type ?? "status"}
          status={avatar.status ?? "offline"}
        />
        <View style={styles.nameBox}>
          <Text style={styles.name}>{username}</Text>
          <Text style={styles.status}>{lastSeen}</Text>
        </View>
      </View>
      <View style={styles.iconBox}>
        <Ionicons
          style={styles.icon}
          name="call"
          size={styles.iconSize}
          color="#000"
        />
        <Ionicons
          style={styles.icon}
          name="videocam"
          size={styles.iconSize}
          color="#000"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#000",

    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.05,
    shadowRadius: 0,
    elevation: 2,
  },

  boxContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 10,
    flexGrow: 1,
  },

  nameBox: {
    display: "flex",
    paddingVertical: 5,
    height: "100%",
    gap: 8,
  },

  back: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  name: {
    fontSize: THEME.fontSize3,
    color: THEME.colorPrimary,
    fontWeight: "bold",
    display: "flex",
    flexWrap: "wrap",
  },

  status: {
    fontSize: THEME.fontSize4,
    color: THEME.colorDark,
    display: "flex",
    flexWrap: "wrap",
  },

  iconBox: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  icon: {
    width: 30,
    height: 30,
  },

  iconSize: 30,
});

export default Header;
