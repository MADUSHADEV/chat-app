import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import {BackButton} from '../ui/BackButton';
import {Title} from '../ui/Title';
import LineInput from '../ui/LineInput';
import Button from '../ui/Button';
import {OAuthButtonGroup} from '../components/OAuthButtonGroup';

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.buttonView1}>
            <BackButton/>
        </View>
        <View style={styles.textGroup}>
          <Title title={"Log In to Chatbox"}/>
          <Text style={styles.text1}>
              Welcome back! Sign in using your social
              account or email to continue us
          </Text>
        </View>
        <View style={styles.buttonGroup}>
            <OAuthButtonGroup/>
        </View>
        <View style={styles.textGroupView1}>
            <View style={styles.textGroupView2} />
                <View>
                    <Text style={styles.textGroupText}>OR</Text>
                </View>
            <View style={styles.textGroupView3} />
        </View>
        <LineInput inputLabel={"Your email"} placeholder={"Type your email..."} onChange={setEmail}></LineInput>
        <LineInput inputLabel={"Password"} placeholder={"Type Password..."} secureTextEntry={true} onChange={setPassword}></LineInput>
        <View style={styles.logInButtonGroup}>
            <Button buttonName={"Log In"} backgroundColor={"#F3F6F6"}/>
            <Text style={styles.text2}>Forgot Password?</Text>
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
  buttonGroup:{
    marginVertical:25,
  },
  text1: {
    color: "#797C7B",
    fontSize: 14,
    textAlign:"center",
    paddingHorizontal:20,
  },
  logInButtonGroup:{
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
  textGroupView1:{
    flexDirection: 'row', 
    alignItems: 'center',
    padding:20,
  },
  textGroupView2:{
    flex: 1, 
    height: 1, 
    backgroundColor: '#CDD1D0'
  },
  textGroupView3:{
    flex: 1, 
    height: 1, 
    backgroundColor: '#CDD1D0',
  },
  textGroupText:{
    width: 50, 
    textAlign: 'center', 
    color:"#797C7B"
  },
  text2:{
    color:"#24786D",
  },
  textGroup:{
    flexDirection:"column",
    rowGap:10,
  },
});