import { StyleSheet, Text, View } from "react-native";

const RightChat = ({ message }) => {
  return (
    <View style={styles.rightChatView}>
      <Text style={styles.chatText}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rightChatView: {
    backgroundColor: "#20A090",
    borderTopLeftRadius: 13,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: "60%",
  },
  chatText: {
    color: "white",
  },
});

export default RightChat;
