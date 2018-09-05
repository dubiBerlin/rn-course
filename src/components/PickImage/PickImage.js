import React from "react";
import { StyleSheet, View, Image, Button, Text, ImageBackground } from "react-native";
import backgroundImagePrev from "../../assets/ljubis.jpg";

class PickImage extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.placeholder} >
                    <Text style={styles.text} >Image Preview!</Text>
                    <Image source={backgroundImagePrev} style={styles.previewImage} ></Image>

                </View>
                <View style={styles.button} >
                    <Button title="Pick image" onPress={() => alert("hello")} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "80%"
    },
    text: {
        backgroundColor: "transparent",
        color: "#f7f7ff",
        fontWeight: "bold",
        textAlign: "center"
    },
    placeholder: {
        height: 250,
        borderWidth: 0
    },
    button: {
        margin: 8
    },
    previewImage: {
        width: "100%",
        height: "90%",
        backgroundColor: "transparent",
        borderRadius: 10
    }
});

export default PickImage;
