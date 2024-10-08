import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import MessageSendBox from "../components/MessageSendBox";
import LeftChat from "../ui/LeftChat";
import RightChat from "../ui/RightChat";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import Avatar from "../ui/Avatar";
import { Title } from "../ui/Title";
import { CONFIG, THEME } from "../constants/constants";
import ChatPreview from "../components/ChatPreview";
import { Navigation } from "../components/Navigation";
import TestData from "../constants/TestData";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import DateFormatter from "../utils/DateFormatter";

const Home = () => {
  const [profile, setProfile] = useState("");
  const [chats, setChats] = useState([]);

  const loadName = async () => {
    const res = await fetch(`${CONFIG.url}/GetName?mobile=078078078`);
    if (!res.ok) {
      return null;
    }
    const data = await res.json();
    return data.letters ? data.letters : "";
  };

  const loadChats = async () => {
    const res = await fetch(`${CONFIG.url}/LoadHomeData?id=1`);

    if (!res.ok) {
      return null;
    }
    const data = await res.json();
    const results = data.success ? data.otherUserList : [];
    return results;
  };

  useEffect(() => {
    const fetchProfileAndChats = async () => {
      const profile = await loadName();
      const chats = await loadChats();
      setProfile(profile);
      setChats(chats);
    };

    setInterval(() => {
      fetchProfileAndChats();
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          style={styles.icon}
          name="arrow-back"
          size={THEME.fontSize1}
          color="#fff"
        />
        <Text style={styles.title}>Home</Text>
        <Avatar letters={profile} type="status" status="active" />
      </View>
      <View style={styles.profiles}>
        <FlatList
          style={{ padding: 10 }}
          horizontal={true}
          data={chats.filter((item) => item.other_user_status === 1)}
          renderItem={({ item }) => (
            <Avatar
              status={"active"}
              type="status"
              uri={item.avatarUri}
              letters={item.other_user_avatar_letters.toUpperCase()}
            />
          )}
        />
      </View>
      <FlatList
        style={styles.scrollView}
        data={chats}
        renderItem={({ item, index }) => (
          <ChatPreview
            key={index}
            avatar={{
              uri: item.avatar_image_found ? item.uri : null,
              status: item.other_user_status == 1 ? "active" : "offline",
              letters: !item.avatar_image_found
                ? item.other_user_avatar_letters.toUpperCase()
                : "",
            }}
            message={item.message}
            unread={item.unread}
            username={item.other_user_name}
            lastseen={DateFormatter(item.dateTime)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: THEME.colorDark,
    paddingTop: 10,
  },

  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  title: {
    textAlign: "center",
    fontSize: THEME.fontSize1,
    color: THEME.colorLight,
    fontWeight: "bold",
  },

  scrollView: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "white",
    paddingTop: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  profiles: {
    flexDirection: "row",
    horizontal: true,
    paddingVertical: 20,
  },
});

export default Home;
