import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomButton = ({ buttonName, event, backgroundColor }) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonStyle,
        { backgroundColor: backgroundColor || "#24786D" },
      ]}
      onPress={() => {
        event;
      }}
    >
      <Text
        style={[
          styles.textStyle, 
          backgroundColor != "#24786D"
            ? { color: "#797C7B" }
            : { color: "white" },
        ]}
      >
        {buttonName}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonStyle: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "500",
  },
});
export default CustomButton;
