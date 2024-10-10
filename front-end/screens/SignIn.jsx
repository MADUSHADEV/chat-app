import React, { useEffect, useState } from "react";
import { Alert, View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BackButton } from "../ui/BackButton";
import { Title } from "../ui/Title";
import LineInput from "../ui/LineInput";
import Button from "../ui/Button";
import { OAuthButtonGroup } from "../components/OAuthButtonGroup";
import { CONFIG } from "../constants/constants";
import { useNavigation } from "@react-navigation/native";

export function SignIn() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation(); // Access navigation

  useEffect(() => {
    const loadUser = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("user");
        if (jsonValue !== null) {
          navigation.replace("App");
        }
      } catch (e) {
        console.error(e);
      }
    };

    loadUser();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonView1}>
        <BackButton />
      </View>
      <View style={styles.textGroup}>
        <Title title={"Log In to Chatbox"} />
        <Text style={styles.text1}>
          Welcome back! Sign in using your social account or email to continue
          us
        </Text>
      </View>
      <View style={styles.buttonGroup}>
        <OAuthButtonGroup />
      </View>
      <View style={styles.textGroupView1}>
        <View style={styles.textGroupView2} />
        <View>
          <Text style={styles.textGroupText}>OR</Text>
        </View>
        <View style={styles.textGroupView3} />
      </View>
      <LineInput
        inputLabel={"Your mobile"}
        placeholder={"Type your mobile..."}
        onChange={setMobile}
      ></LineInput>
      <LineInput
        inputLabel={"Password"}
        placeholder={"Type Password..."}
        secureTextEntry={true}
        onChange={setPassword}
      ></LineInput>
      <View style={styles.logInButtonGroup}>
        <Button
          buttonName={"Log In"}
          backgroundColor={"#24786D"}
          event={async () => {
            try {
              let response = await fetch(`${CONFIG.url}/SignIn`, {
                method: "POST",
                body: JSON.stringify({
                  mobile: mobile,
                  password: password,
                }),
                headers: {
                  "Content-Type": "application/json",
                },
              });

              if (response.ok) {
                let json = await response.json();
                if (json.success) {
                  try {
                    await AsyncStorage.setItem(
                      "user",
                      JSON.stringify(json.user)
                    );
                    Alert.alert("Success", "You have successfully signed in!");
                    navigation.replace("App");
                  } catch (e) {
                    Alert.alert("Error", "Unable to store user information.");
                  }
                } else {
                  Alert.alert(
                    "Error",
                    json.message || "Sign-in failed. Please try again."
                  );
                }
              } else {
                Alert.alert("Error", `Sign-in failed. Please try again.`);
              }
            } catch (error) {
              Alert.alert(
                "Error",
                "Network error. Please check your connection."
              );
            }
          }}
        />
        <Text
          style={styles.text2}
          onPress={() => navigation.navigate("SignUp")}
        >
          Create new account?
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 20,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  buttonGroup: {
    marginVertical: 25,
  },
  text1: {
    color: "#797C7B",
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  logInButtonGroup: {
    flexDirection: "column",
    rowGap: 10,
    alignItems: "center",
    marginTop: 60,
    paddingTop: 40,
  },
  buttonView1: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  textGroupView1: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  textGroupView2: {
    flex: 1,
    height: 1,
    backgroundColor: "#CDD1D0",
  },
  textGroupView3: {
    flex: 1,
    height: 1,
    backgroundColor: "#CDD1D0",
  },
  textGroupText: {
    width: 50,
    textAlign: "center",
    color: "#797C7B",
  },
  text2: {
    color: "#24786D",
  },
  textGroup: {
    flexDirection: "column",
    rowGap: 10,
  },
});
