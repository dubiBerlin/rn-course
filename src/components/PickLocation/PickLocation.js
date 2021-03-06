import React from "react";
import { StyleSheet, View, Button, Text, } from "react-native";

class PickImage extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.placeholder} >
                    <Text style={styles.text} >Map</Text>
                </View>
                <View style={styles.button} >
                    <Button title="Locate Me" onPress={() => alert("hello")} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // width: "80%"
        width: "100%",
        alignItems: "center"
    },
    text: {
        backgroundColor: "transparent",
        color: "#f7f7ff",
        fontWeight: "bold",
        textAlign: "center"
    },
    placeholder: {
        // height: 250,
        // borderWidth: 0,
        // backgroundColor: "grey"
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "80%",
        height: 150
    },
    button: {
        margin: 8
    }
});
export default PickImage;
