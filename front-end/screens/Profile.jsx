import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import { CONFIG, THEME } from "../constants/constants";
import { Ionicons } from "@expo/vector-icons";
import Avatar from "../ui/Avatar";
import LineInput from "../ui/LineInput";
import { useState, useEffect } from "react";
import CustomButton from "../ui/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [image, setImage] = useState(null);
  const [userId, setUserId] = useState(null);

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

  useEffect(() => {
    const fetchData = async () => {
      const userData = await loadUserData();
      if (userData) {
        setFirstName(userData.first_name);
        setLastName(userData.last_name);
        setMobile(userData.mobile);
        setUserId(userData.id);
        // console.log(userData);

        // Load the user's profile image
        if (userData.uri) {
          setImage(userData.uri);
        }

      }
    };

    fetchData();
  }, []);
  // console.log();
  // console.log(firstName, lastName, mobile, userId, image);

  // const handleChange = (setter) => (value) => {
  //   setter(value);
  // };

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
          uri={image}
          letters={`${firstName.charAt(0)}${lastName.charAt(0)}`}
          type="add"
          style={{ width: 100, height: 100 }}
          imagePick={(uri) => setImage && setImage(uri)}
        />
        <Text style={styles.userName}>
          {firstName} {lastName}
        </Text>
        <Text style={styles.userID}>{mobile}</Text>
      </View>

      <View style={styles.scrollView}>
        <LineInput
          inputLabel={"First Name"}
          placeholder={"Enter your first name"}
          value={firstName}
          // onChangeText={handleChange(setFirstName)}
          onChange={setFirstName}
        />
        <LineInput
          value={lastName}
          inputLabel={"last Name"}
          placeholder={"Enter your last name"}
          // onChangeText={handleChange(setLastName)}
          onChange={setLastName}
        />
        <LineInput
          value={mobile}
          inputLabel={"Mobile"}
          placeholder={"Enter your mobile number"}
          // onChangeText={handleChange(setMobile)}
          onChange={setMobile}
        />
        <CustomButton
          customStyle={{ width: "100%", text: { color: "white" } }}
          buttonName={"Save"}
          event={async () => {
            try {
              // Create an object to hold your profile data
              const profileData = {
                user_id: userId,
                mobile: mobile,
                firstName: firstName,
                lastName: lastName,
              };

              // Check if an image is selected and include it as base64 or in a different way
              if (image != null) {
                const base64Image = await fetch(image)
                  .then((response) => response.blob())
                  .then((blob) => {
                    return new Promise((resolve) => {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        resolve(reader.result); // Returns base64 string
                      };
                      reader.readAsDataURL(blob);
                    });
                  });

                profileData.uri = base64Image; // Add the base64 image to the profile data
              }

              // Send the request to the server
              const response = await fetch(`${CONFIG.url}/Profile`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json", // Set the Content-Type to application/json
                },
                body: JSON.stringify(profileData), // Stringify the profile data
              });

              console.log(response);

              // Check for successful response
              if (!response.ok) {
                const errorData = await response.json();
                console.error("Error:", errorData.error);
                throw new Error(
                  "Network response was not ok: " + errorData.error
                );
              }

              const data = await response.json();
              console.log(data);

              if (data.success) {
                console.log(data.user.id);
                console.log(data.user.mobile);
                console.log(data.user.first_name);
                console.log(data.user.last_name);

                // console.log(data.uri);

                // Handle success
                // For example, save updated user data to AsyncStorage
                try {
                  await AsyncStorage.setItem("user", JSON.stringify(data.user));
                  Alert.alert("Success", "Profile updated successfully!");
                } catch (error) {
                  console.error("Failed to store user data:", error);
                }
              }
            } catch (e) {
              console.error(e);
            }
          }}
        />

        <CustomButton
          event={() => {
            AsyncStorage.clear();
            navigation.replace("SignIn");
          }}
          customStyle={{
            width: "100%",
            text: { color: "white" },
            marginTop: 10,
          }}
          buttonName={"Log Out"}
          backgroundColor={"red"}
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
