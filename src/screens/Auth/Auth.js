import React, { Component } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";

import startMainTabs from "../MainTabs/startMainTabs";
// wir haben eigene TextInput Komponenten erstellt und die sollen jetzt eingebaut werden
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";


class AuthScreen extends Component {

    loginHandler = () => {
        startMainTabs();
    }

    render() {
        // underlineColorAndroid entfernt die borderbottom im input field in Android
        return (
            <View style={styles.container}>
                <HeadingText >Please Log In</HeadingText>
                <Button title="Switch To Login" />
                <View style={styles.inputContainer}>
                    <DefaultInput placeholder="Your E-Mail Address" style={styles.input} />
                    <DefaultInput placeholder="Password" style={styles.input} />
                    <DefaultInput placeholder="Confirm Password" style={styles.input} />
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
        backgroundColor: "#eee",
        borderColor: "#bbb"
    }
})

export default AuthScreen;