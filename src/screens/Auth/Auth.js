import React, { Component } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";

import startMainTabs from "../MainTabs/startMainTabs";

class AuthScreen extends Component {

    loginHandler = () => {
        startMainTabs();
    }

    render() {
        // underlineColorAndroid entfernt die borderbottom im input field in Android
        return (
            <View style={styles.container}>
                <Text>Please Log In</Text>
                <Button title="Switch To Login" style={styles.input} />
                <View style={styles.inputContainer}>
                    <TextInput placeholder="Your E-Mail Address" style={styles.input} underlineColorAndroid="transparent" />
                    <TextInput placeholder="Password" style={styles.input} underlineColorAndroid="transparent" />
                    <TextInput placeholder="Confirm Password" style={styles.input} underlineColorAndroid="transparent" />
                </View>
                <Button title="Submit" onPress={this.loginHandler} style={styles.input} />
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // nimmt die gesamte Seite ein
        justifyContent: "center", // Zentriert den Inhalt (standard Vertikal)
        alignItems: "center"
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#eee",
        padding: 5,
        margin: 8,
        borderRadius: 5
    }
})

export default AuthScreen;