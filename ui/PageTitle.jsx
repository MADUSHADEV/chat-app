import {StyleSheet, Text, View} from "react-native";

// props.title => Title
// props.size => Font size
// props.color => Font color
export function PageTitle(props) {
    return (
        <View style={styles.pageTitleView}>
            <Text style={styles.pageTitleText(props)}>{props.title}</Text>
        </View>
    );
} 

const styles = StyleSheet.create({
    pageTitleView: {
        justifyContent:"center",
        alignItems:"center",
        padding:10,
    },

    pageTitleText: (props) => {
        return {
            fontSize: props.size || 25,
            color:props.color || "#FFFFFF",
            fontWeight:"bold",
        }   
    },
});