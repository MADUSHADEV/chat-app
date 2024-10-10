import { Image, StyleSheet, TextInput, View } from "react-native";

const BoxInput = ({ onChangeText, value = "", placeholder = "Write your message" }) => {
  return (
    <View style={styles.containerInput}>
      <TextInput
      onChangeText={onChangeText}
        style={styles.inputStyle}
        placeholder={placeholder}
        value={value}
      />
      <Image
        source={require("../assets/icons/Vector.png")}
        style={styles.icon}
      />
    </View>
  );
};

//styles
const styles = StyleSheet.create({
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F3F6F6",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  inputStyle: {
    padding: 8,
    backgroundColor: "#F3F6F6",
    width: "90%",
  },
  icon: {
    width: 24,
    marginLeft: 3,
    height: 24,
    tintColor: "#A9A9A9",
  },
});

export default BoxInput;
