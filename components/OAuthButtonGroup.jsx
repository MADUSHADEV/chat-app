import {StyleSheet, View} from "react-native";
import {AuthButton} from "../ui/AuthButton";

// props.image => Image sources[]
// props.onPressEvent => On Press Event[]
// props.size => size
// props.columnGap => columnGap
export function OAuthButtonGroup(props) {
    return (
        <View style={styles.oAuthButtonGroupView(props)}>
            {props.image.map((image, index) => (
                <AuthButton 
                    key={index} 
                    image={image} 
                    onPressEvent={props.onPressEvent[index]}
                    size={props.size}
                />
            ))}
        </View>
    );
} 

const styles = StyleSheet.create({
    oAuthButtonGroupView: (props) => {
        return {
            flex: 1,
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
            columnGap:props.columnGap || 10,
            padding:10,
        }
    },
});