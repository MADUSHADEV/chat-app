import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import {BackButton} from '../ui/BackButton';
import {Title} from '../ui/Title';
import LineInput from '../ui/LineInput';
import Button from '../ui/Button';

export function SignUp() {
    const [fname, setfName] = useState("");
    const [lname, setlName] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.buttonView1}>
          <BackButton/>
        </View>
        <View style={styles.textGroup}>
          <Title title={"Sign Up with Email"}/>
          <Text style={styles.text1}>
              Get chatting with  friends and family today by signing up for our chat app!
          </Text>
        </View>
        <View style={styles.inputGroup}>
          <LineInput inputLabel={"Your first name"} placeholder={"Type your first name..."} onChange={setfName}></LineInput>
          <LineInput inputLabel={"Your last name"} placeholder={"Type your last name..."} onChange={setlName}></LineInput>
          <LineInput inputLabel={"Your email"} placeholder={"Type your email..."} onChange={setMobile}></LineInput>
          <LineInput inputLabel={"Password"} placeholder={"Type Password..."} secureTextEntry={true} onChange={setPassword}></LineInput>
          <LineInput inputLabel={"Confirm password"} placeholder={"Type Confirm password..."} secureTextEntry={true} onChange={setCPassword}></LineInput>
        </View>
        <View style={styles.buttonGroup}>
          <Button buttonName={"Create an account"} backgroundColor={"#F3F6F6"} onPress={async () => {
            try {
              let formData = new FormData();
              formData.append("mobile", mobile);
              formData.append("firstName", fname);
              formData.append("lastName", lname);
              formData.append("password", password);

              let response = await fetch("http://192.168.140.189:8081/ReactChat/SignUp", {
                method: "POST",
                body: formData,
                // No need to manually set Content-Type, it will be automatically set for FormData
              });

              if (response.ok) {
                let json = await response.json();
                if (json.success) {
                  // User registration is successful
                  // router.replace("/");
                } else {
                  // Handle error response from API
                  Alert.alert("Error", json.message);
                }
              } else {
                // Handle HTTP error response (like 4xx or 5xx)
                Alert.alert("Error", `HTTP Error: ${response.status}`);
              }
            } catch (error) {
              // Network or any other unexpected error
              Alert.alert("Error", "Something went wrong. Please try again later.");
            }
          }}
          />
        </View>
      </SafeAreaView> 
    );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    rowGap:20,
    paddingHorizontal:10,
    justifyContent:"center",
  },
  text1: {
    color: "#797C7B",
    fontSize: 14,
    textAlign:"center",
    paddingHorizontal:20,
  },
  buttonGroup:{
    flexDirection:"column",
    rowGap:10,
    alignItems:"center",
    marginTop:60,
    paddingTop:40,
  },
  buttonView1:{
    position:"absolute",
    top:40,
    left:20,
  },
  inputGroup:{
    marginVertical:30,
    flexDirection:"column",
    rowGap:15,
  },
  textGroup:{
    flexDirection:"column",
    rowGap:10,
  },
});