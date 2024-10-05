import { Button, StyleSheet } from "react-native";
import { BUTTON } from "../constants/constants";

const SignUpButton = () => {
  return <Button title={BUTTON.signUp} style={styles.button} />;
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    color: "white",
  },
});
export default SignUpButton;
