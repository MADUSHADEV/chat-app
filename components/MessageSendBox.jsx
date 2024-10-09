import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import BoxInput from "../ui/BoxInput";

const MessageSendBox = ({ deafaultText, onChangeText, onSend }) => {
  return (
    <View style={styles.messageBoxContainer}>
      <View style={styles.MessageSendBoxView}>
        <BoxInput value={deafaultText} onChangeText={onChangeText} />
      </View>
      <TouchableOpacity style={styles.button} onPress={onSend}>
        <Image
          source={require("../assets/icons/SendButtonIcon.png")}
          style={styles.IconWrapper}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  messageBoxContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignContent: "space-between",
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderTopColor: "#E5E5E5",
    borderTopWidth: 1,
    shadowColor: "#000",

    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.05,
    shadowRadius: 0,
    elevation: 2,
  },
  PathView: {
    backgroundColor: "Red",
    width: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  MessageSendBoxView: {
    backgroundColor: "Green",
    width: "80%",
  },
  button: {
    width: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "Blue",
  },
  IconWrapper: {
    width: 50,
    height: 50,
  },
});

export default MessageSendBox;
