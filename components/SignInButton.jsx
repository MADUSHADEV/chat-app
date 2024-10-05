import { Button, StyleSheet } from "react-native";
import { BUTTON } from "../constants/constants";

const SignInButton = () => {
  return <Button title={BUTTON.signIn} style={styles.button} />;
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    color: "white",
  },
});
export default SignInButton;
