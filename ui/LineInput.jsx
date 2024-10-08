import { StyleSheet, Text, TextInput, View } from "react-native";
import { STYLES, THEME } from "../constants/constants";
import { useEffect, useState } from "react";

const LineInput = ({
  inputLabel,
  value,
  placeholder,
  onChange,
  secureTextEntry = false,
}) => {
  let [input, setInput] = useState(value);

  useEffect(() => {
    onChange(input);
  }, [input]);

  return (
    <View style={styles.inputField}>
      <Text style={styles.label}>{inputLabel}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        onChangeText={(text) => setInput(text)}
        style={styles.input}
        value={input}
        placeholder={placeholder}
        placeholderTextColor={styles.input.placeholderColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    width: "100%",
  },

  label: {
    width: "100%",
    textAlign: "left",
    fontSize: THEME.fontSize2,
    color: THEME.colorPrimary,
  },

  input: {
    fontSize: THEME.fontSize3,
    paddingHorizontal: 10,
    paddingVertical: 3,
    ...STYLES.borderBottom1,
    placeholderColor: THEME.colorLightGray,
  },
});

export default LineInput;
