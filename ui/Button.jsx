import { Button, StyleSheet } from "react-native";
import { BUTTON } from "../constants/constants";

const CustomButton = () => {
  return <Button title="Sign In" style={styles.button} />;
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    color: "white",
  },
});
export default CustomButton;
