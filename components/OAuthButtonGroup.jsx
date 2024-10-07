import {StyleSheet, View} from "react-native";
import {AuthButton} from "../ui/AuthButton";

export function OAuthButtonGroup(props) {
    return (
        <View style={styles.oAuthButtonGroupView(props)}>
                <AuthButton 
                    image={require('../assets/images/facebook-logo.png')} 
                />
                <AuthButton 
                    image={require('../assets/images/google-logo.png')} 
                />
                <AuthButton 
                    image={require('../assets/images/apple-logo.png')} 
                />
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