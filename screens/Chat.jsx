import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import MessageSendBox from "../components/MessageSendBox";
import LeftChat from "../ui/LeftChat";
import RightChat from "../ui/RightChat";

const Chat = () => {
  return (
    <SafeAreaView style={styles.ChatPageContainer}>
      <ScrollView style={styles.centerChatBox}>
        <LeftChat message="Hello ! Nazrul How are you?" />
        <RightChat message="You did your job well!" />
      </ScrollView>
      <MessageSendBox />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  ChatPageContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  centerChatBox: {
    flexGrow: 1,
    flexDirection: "column",
    width: "100%",
    gap: 10,
    backgroundColor: "red",
  },
});

export default Chat;
