import { StyleSheet, Text, View } from "react-native";

const LeftChat = ({ message }) => {
  return (
    <View style={styles.chatView}>
      <Text>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chatView: {
    backgroundColor: "#F2F7FB",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 13,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: "80%",
  },
});

export default LeftChat;
