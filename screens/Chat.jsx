import { ScrollView, StyleSheet, Text, View } from "react-native";
import MessageSendBox from "../components/MessageSendBox";
import LeftChat from "../ui/LeftChat";
import RightChat from "../ui/RightChat";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import Avatar from "../ui/Avatar";

const Chat = () => {
  return (
    <SafeAreaView style={styles.ChatPageContainer}>
      <Header />
      <ScrollView style={styles.centerChatBox}>
        {/* left chat */}
        <View style={styles.leftChatView}>
          {/* main box */}
          <View style={styles.mainBox}>
            {/* avatar */}
            <View style={styles.avatarView}>
              <Avatar uri="https://picsum.photos/200/300" />
            </View>
            {/* chat box */}
            <View style={styles.chatBox}>
              {/* user name */}
              <Text style={styles.userName}>Jhon Abraham</Text>
              {/* messages goes here*/}
              <View style={styles.messages}>
                <LeftChat message="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
              </View>
              {/* messages goes here*/}
            </View>
          </View>
        </View>
        {/* right side chat */}
        <View style={styles.RightChatView}>
          <RightChat message="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
        </View>
        {/* right side chat */}
      </ScrollView>
      <MessageSendBox />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  ChatPageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  chatBox: {
    paddingBottom: 10,
    paddingStart: 10,
    paddingTop: 5,
  },
  userName: {
    color: "black",
    fontWeight: "semibold",
    fontSize: 17,
    paddingBottom: 5,
  },
  messages: {
    paddingBottom: 5,
  },
  mainBox: {
    flex: 1,
    flexDirection: "row",
  },
  leftChatView: {
    alignItems: "flex-start",
    width: "100%",
    padding: 5,
  },
  RightChatView: {
    alignItems: "flex-end",
    width: "100%",
    padding: 5,
  },
  centerChatBox: {
    flexGrow: 1,
    flexDirection: "column",
    width: "100%",
  },
});

export default Chat;
