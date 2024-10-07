import { ScrollView, StyleSheet, Text, View } from "react-native";
import MessageSendBox from "../components/MessageSendBox";
import LeftChat from "../ui/LeftChat";
import RightChat from "../ui/RightChat";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import Avatar from "../ui/Avatar";
import { Title } from "../ui/Title";
import { THEME } from "../constants/constants";
import ChatPreview from "../components/ChatPreview";
import { Navigation } from "../components/Navigation";
import TestData from "../constants/TestData";
import { Ionicons } from "@expo/vector-icons";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          style={styles.icon}
          name="arrow-back"
          size={styles.iconSize}
          color="#000"
        />
        <Text style={styles.title}>Home</Text>
        <Avatar />
      </View>
      <View style={styles.profiles}>
        <ScrollView style={{ padding: 10 }} horizontal={true}>
          {TestData.filter((item) => item.status === "active").map(
            (item, index) => (
              <Avatar status={item.status} type="status" uri={item.avatarUri} />
            )
          )}
        </ScrollView>
      </View>
      <ScrollView style={styles.scrollView}>
        {TestData.map((item, index) => (
          <ChatPreview
            key={index}
            avatar={{ uri: item.avatarUri, status: item.status }}
            message={item.message}
            unread={item.unread}
            username={item.username}
            lastseen={item.lastseen}
          />
        ))}
      </ScrollView>
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
