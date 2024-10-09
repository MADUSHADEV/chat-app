import { useEffect, useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
} from "react-native";
import MessageSendBox from "../components/MessageSendBox";
import LeftChat from "../ui/LeftChat";
import RightChat from "../ui/RightChat";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import Avatar from "../ui/Avatar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CONFIG } from "../constants/constants";

const Chat = ({ route }) => {
  const scrollViewRef = useRef(null);

  const { from_user_id, username, lastseen, status } = route.params; // Get the user ID from props
  const [messages, setMessages] = useState([]); // State to store chat messages
  const [messageInput, setMessageInput] = useState(); // State for the message input
  const [currentUser, setCurrentUser] = useState(null); // State for the logged-in user

  // Load chat messages and user data on component mount
  useEffect(() => {
    loadChatMessages();

    const intervalId = setInterval(() => {
      loadChatMessages();
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messageInput]);

  // Function to load chat messages
  const loadChatMessages = async () => {
    const logged_user_id = await loadUserData().then((data) => data.id);
    try {
      const response = await fetch(
        `${CONFIG.url}/LoadChat?other_user_id=${from_user_id}&logged_user_id=${logged_user_id}`
      );
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error("Failed to load messages:", error);
    }
  };

  const loadUserData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("user");
      if (jsonValue !== null) {
        const jsonObject = await JSON.parse(jsonValue);
        return jsonObject;
      }
    } catch (e) {
      console.error(e);
    }
    return null;
  };

  // Function to send a new chat message
  const sendMessage = async () => {
    console.log(messageInput.trim());
    if (messageInput.trim() === "") {
      Alert.alert("Message cannot be empty");
      return;
    }

    const newMessage = {
      logged_user_id: await loadUserData().then((data) => data.id), // Current logged-in user ID
      other_user_id: from_user_id, // ID of the chat user
      message: messageInput, // Message content
    };

    try {
      const response = await fetch(
        `${CONFIG.url}/SendChat?${new URLSearchParams(newMessage).toString()}`
      );

      const data = await response.json();

      if (!data.success) {
        Alert.alert("Message Failed");
      }

      setMessageInput("");
      loadChatMessages();
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <SafeAreaView style={styles.ChatPageContainer}>
      <Header lastSeen={lastseen} username={username} avatar={{ status }} />
      <ScrollView style={styles.centerChatBox} ref={scrollViewRef}>
        {messages.map((msg, index) =>
          msg.side === "right" ? (
            <View style={styles.RightChatView} key={index}>
              <RightChat message={msg.message} />
            </View>
          ) : (
            <View style={styles.leftChatView} key={index}>
              <View style={styles.mainBox}>
                <View style={styles.avatarView}>
                  <Avatar uri="https://picsum.photos/200/300" />
                </View>
                <View style={styles.chatBox}>
                  <Text style={styles.userName}>User Name</Text>
                  <View style={styles.messages}>
                    <LeftChat message={msg.message} />
                  </View>
                </View>
              </View>
            </View>
          )
        )}
      </ScrollView>

      {/* Message send box */}
      <MessageSendBox
        deafaultText={messageInput}
        onChangeText={(text) => setMessageInput(text)}
        onSend={sendMessage} // Pass sendMessage function to handle sending
      />
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
