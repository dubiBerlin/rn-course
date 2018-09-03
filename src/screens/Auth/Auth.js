import React, { Component } from "react";
import { StyleSheet, View, Button, ImageBackground } from "react-native";

import startMainTabs from "../MainTabs/startMainTabs";
// wir haben eigene TextInput Komponenten erstellt und die sollen jetzt eingebaut werden
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import backgroundImage from "../../assets/background.jpg";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";

class AuthScreen extends Component {

    loginHandler = () => {
        startMainTabs();
    }

    render() {
        // underlineColorAndroid entfernt die borderbottom im input field in Android
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage} >
                <View style={styles.container}>
                    <MainText>
                        <HeadingText >Please Log In</HeadingText>
                    </MainText>
                    <ButtonWithBackground textColor="white" color="transparent" onPress={this.loginHandler} >Switch To Login</ButtonWithBackground>
                    <View style={styles.inputContainer}>
                        <DefaultInput placeholder="Your E-Mail Address" style={styles.input} />
                        <DefaultInput placeholder="Password" style={styles.input} />
                        <DefaultInput placeholder="Confirm Password" style={styles.input} />
                    </View>
                    <ButtonWithBackground textColor="white" color="transparent" >Submit</ButtonWithBackground>
                </View >
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // nimmt die gesamte Seite ein,
        justifyContent: "center", // Zentriert den Inhalt (standard Vertikal)
        alignItems: "center"
    },
    inputContainer: {
        width: "80%"
    },
    backgroundImage: {
        width: "100%",
        flex: 1
    },
    input: {
        backgroundColor: "#eee",
        borderColor: "#bbb"
    }
})

export default AuthScreen;