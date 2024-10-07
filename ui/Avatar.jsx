import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { THEME } from "../constants/constants";

/**
 *
 * @param {Object} param0 properties
 * @param {string} param0.uri string image URI
 * @param {"active" | "offline"} param0.status status of the avatar, can be "active" or "offline"
 * @param {"none" | "add" | "status"} param0.type type of the avatar, can be "none", "add", or "status"
 *
 *
 * @returns
 */
const Avatar = ({ uri, status, type = "none" }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.imageBox} />
      <View
        style={[
          styles.statusDot,
          status === "active" ? styles.active : styles.offline,
          type === "status" ? { display: "flex" } : { display: "none" },
        ]}
      ></View>
      <View
        style={[
          styles.addImageDot,
          type === "add" ? { display: "flex" } : { display: "none" },
        ]}
      >
        <Image
          style={styles.plus}
          source={require("./../assets/icons/plus.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    padding: 3,
    borderRadius: 60,
    backgroundColor: THEME.colorLightGray,
  },

  imageBox: {
    borderRadius: 100,
    width: "100%",
    height: "100%",
  },

  statusDot: {
    width: 17,
    height: 17,
    borderRadius: 10,
    position: "absolute",
    borderColor: THEME.colorLightGray,
    borderWidth: 3,
    right: 2,
    bottom: 2,
  },

  active: {
    backgroundColor: "#00FF00",
  },
  offline: {
    backgroundColor: "gray",
  },

  addImageDot: {
    width: 22,
    height: 22,
    borderRadius: 10,
    position: "absolute",
    borderColor: THEME.colorLightGray,
    backgroundColor: THEME.colorLightGray,
    borderWidth: 3,
    right: 2,
    bottom: 2,
  },

  plus: {
    width: "100%",
    height: "100%",
  },
});

export default Avatar;
