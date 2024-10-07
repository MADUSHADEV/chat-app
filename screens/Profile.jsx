import { ScrollView, StyleSheet, Text, View } from "react-native";
import { THEME } from "../constants/constants";
import { Ionicons } from "@expo/vector-icons";
import Avatar from "../ui/Avatar";
import LineInput from "../ui/LineInput";
import { useState } from "react";
import CustomButton from "../ui/Button";

const Profile = () => {
  const [dispalyName, setDisplayName] = useState("");
  const [email, setEmail] = useState("myname@gmail.com");
  const [mobile, setMobile] = useState("78585655");

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          style={styles.icon}
          name="arrow-back"
          size={THEME.fontSize1}
          color="#fff"
        />
      </View>

      <View style={styles.profileImage}>
        <Avatar
          uri="https://picsum.photos/200/300"
          type="none"
          style={{ width: 100, height: 100 }}
        />
        <Text style={styles.userName}>Mata Hodatam Track 💦</Text>
        <Text style={styles.userID}>@kumarawelgama</Text>
      </View>

      <View style={styles.scrollView}>
        <LineInput
          inputLabel={"Display Name"}
          placeholder={"UserName"}
          value={dispalyName}
          onChange={setDisplayName}
        />
        <LineInput
          value={email}
          inputLabel={"Email Address"}
          placeholder={"example@mail.com"}
          onChange={setEmail}
        />
        <LineInput
          value={mobile}
          inputLabel={"Mobile No"}
          placeholder={"123881231"}
          onChange={setMobile}
        />

        <CustomButton
          customStyle={{ width: "100%", text: { color: "white" } }}
          buttonName={"Save"}
        />
      </View>
    </ScrollView>
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

  profileImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
  },

  userName: {
    color: THEME.colorLight,
    fontSize: THEME.fontSize1,
    paddingHorizontal: 70,
    paddingTop: 10,
    textAlign: "center",
  },

  userID: {
    fontSize: THEME.fontSize3,
    color: THEME.colorGray,
    marginTop: 4,
  },

  scrollView: {
    width: "100%",
    height: "100%",
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "white",
    paddingTop: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default Profile;
