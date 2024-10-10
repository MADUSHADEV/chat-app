import { StyleSheet, Text, View } from "react-native";

// props.title => Title
// props.size => Font size
// props.color => Font color
export function Title(props) {
  return (
    <View style={(styles.titleView, { ...props.style })}>
      <Text style={styles.titleText(props)}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    
  },

  titleText: (props) => {
    return {
      fontSize: props.size || 25,
      color: props.color || "#000E08",
      fontWeight: "bold",
      paddingStart: "20%",
    };
  },
});
