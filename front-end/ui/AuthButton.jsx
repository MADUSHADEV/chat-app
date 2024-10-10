import {Image, Pressable, StyleSheet} from "react-native";

// props.size => pressable size
// props.image => require(Image source)
// props.imageSize => Image size
// props.onPressEvent => Event when pressable press
export function AuthButton(props) {
    return (
        <Pressable style={styles.authButtonPressable(props)} onPress={props.onPressEvent}>
            <Image source={props.image} style={styles.authButtonImage(props)}/>
        </Pressable>
    );
} 

const styles = StyleSheet.create({

    authButtonPressable: (props) => {
        return {
            height: props.size || 60,
            width: props.size || 60,
            backgroundColor:"white",
            borderColor:"black",
            borderWidth:1.5,
            borderRadius:200,
            justifyContent:"center",
            alignItems:"center",
        }   
    },

    authButtonImage: (props) => {
        return {
            height: props.imageSize || 40,
            width: props.imageSize || 40,
        }   
    },
});