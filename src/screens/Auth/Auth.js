import React, { Component } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";

import startMainTabs from "../MainTabs/startMainTabs";
// wir haben eigene TextInput Komponenten erstellt und die sollen jetzt eingebaut werden
import DefaultInput from "../../components/UI/DefaultInput";

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
                    <DefaultInput placeholder="Your E-Mail Address" />
                    <DefaultInput placeholder="Password" />
                    <DefaultInput placeholder="Confirm Password" />
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
    }
})

export default AuthScreen;