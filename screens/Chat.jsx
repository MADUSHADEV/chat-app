import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import MessageSendBox from "../components/MessageSendBox";
import LeftChat from "../ui/LeftChat";
import RightChat from "../ui/RightChat";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import Avatar from "../ui/Avatar";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Chat = ({ route }) => {
  const { from_user_id } = route.params; // Get the user ID from props
  const [messages, setMessages] = useState([]); // State to store chat messages
  const [messageInput, setMessageInput] = useState(""); // State for the message input
  const [currentUser, setCurrentUser] = useState(null); // State for the logged-in user

  // Function to load chat messages
  const loadChatMessages = async () => {
    try {
      const response = await fetch(`https://fakeapi.com/chats/${from_user_id}`);
      const data = await response.json();
      setMessages(data.messages); // Update messages with the fetched data
    } catch (error) {
      console.error("Failed to load messages:", error);
    }
  };

  // Load chat messages and user data on component mount
  useEffect(() => {
    const loadUserData = async () => {
      const user = await AsyncStorage.getItem("User");
      setCurrentUser(JSON.parse(user));
    };

    loadUserData();
    loadChatMessages();
  }, []);

  // Function to send a new chat message
  const sendMessage = async () => {
    if (messageInput.trim() === "") {
      Alert.alert("Message cannot be empty");
      return;
    }

    const newMessage = {
      from_user_id: currentUser?.id, // Current logged-in user ID
      to_user_id: from_user_id, // ID of the chat user
      message: messageInput, // Message content
    };

    try {
      const response = await fetch(`https://fakeapi.com/chats/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMessage),
      });

      const data = await response.json();
      setMessages([...messages, data.message]); // Add the new message to the chat list
      setMessageInput(""); // Clear input after sending the message
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <SafeAreaView style={styles.ChatPageContainer}>
      <Header />
      <ScrollView style={styles.centerChatBox}>
        {messages.map((msg, index) =>
          msg.from_user_id === currentUser?.id ? (
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
        messageInput={messageInput}
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
