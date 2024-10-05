import { Button, StyleSheet } from "react-native";
import { BUTTON } from "../constants/constants";

const Button = () => {
  return <Button title={BUTTON.signIn} style={styles.button} />;
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    color: "white",
  },
});
export default Button;
