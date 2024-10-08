import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import Avatar from "../ui/Avatar";
import { THEME } from "../constants/constants";
import { TouchableOpacity } from "react-native";

const ChatPreview = ({
  username = "Username",
  message = "message..",
  lastseen = "00:00 PM",
  unread = "2",
  avatar = {},
  style = {},
  user = {},
}) => {
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Pressable onPress={() => {}}>
        <Avatar
          uri={avatar.uri ?? null}
          letters={avatar.letters}
          type={avatar.type ?? "status"}
          status={avatar.status ?? "offline"}
        />
      </Pressable>

      <View style={styles.boxContainer}>
        <Text style={styles.name}>{username}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>

      <View style={styles.feedback}>
        <Text style={styles.lastseen}>{lastseen}</Text>
        <Text style={styles.unread}>{unread}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    paddingVertical: 8,
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    marginVertical: 4,
    borderRadius: 10,
    backgroundColor: THEME.colorLight,
  },

  boxContainer: {
    display: "flex",
    flexDirection: "column",
    paddingVertical: 10,
    paddingHorizontal: 10,
    gap: 8,
    flexGrow: 1,
  },

  name: {
    fontSize: THEME.fontSize3,
  },

  message: {
    color: THEME.colorGray,
  },

  feedback: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 10,
  },

  lastseen: {
    fontSize: THEME.fontSize4,
  },

  unread: {
    textAlign: "center",
    color: "white",
    backgroundColor: "#A00",
    width: 22,
    height: 22,
    borderRadius: 22,
  },
});

export default ChatPreview;
