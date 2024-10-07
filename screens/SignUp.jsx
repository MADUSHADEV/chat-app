import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import {BackButton} from '../ui/BackButton';
import {Title} from '../ui/Title';
import LineInput from '../ui/LineInput';
import Button from '../ui/Button';

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
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
          <LineInput inputLabel={"Your name"} placeholder={"Type your name..."} onChange={setName}></LineInput>
          <LineInput inputLabel={"Your email"} placeholder={"Type your email..."} onChange={setEmail}></LineInput>
          <LineInput inputLabel={"Password"} placeholder={"Type Password..."} secureTextEntry={true} onChange={setPassword}></LineInput>
          <LineInput inputLabel={"Confirm password"} placeholder={"Type Confirm password..."} secureTextEntry={true} onChange={setCPassword}></LineInput>
        </View>
        <View style={styles.buttonGroup}>
          <Button buttonName={"Create an account"} backgroundColor={"#F3F6F6"}/>
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