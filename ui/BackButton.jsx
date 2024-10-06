import { FontAwesome } from "@expo/vector-icons";
import {Pressable, StyleSheet} from "react-native";

// props.size => Icon size
// props.onPressEvent => Event when pressable press
export function BackButton(props) {
    return (
        <Pressable style={styles.backButtonPressable} onPress={props.onPressEvent}>
            <FontAwesome name={"long-arrow-left"} size={props.size || 40} color={"#000E08"}/>
        </Pressable>
    );
} 

const styles = StyleSheet.create({
    backButtonPressable: {
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        borderRadius:100,
    },
});