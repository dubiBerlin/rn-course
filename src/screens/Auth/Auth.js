import React, { Component } from "react";
import { StyleSheet, View, Button, ImageBackground, Dimensions } from "react-native";

import startMainTabs from "../MainTabs/startMainTabs";
// wir haben eigene TextInput Komponenten erstellt und die sollen jetzt eingebaut werden
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import backgroundImage from "../../assets/background2.jpg";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";

class AuthScreen extends Component {

    state = {
        respStyles: {
            pwContainerDirection: "column",
            pwContainerJustifyContent: "flex-start",
            pwWrapperWidth: "100%"
        }
    }


    constructor(props) {
        super(props);

        /**
         * Dimensions.addEventListener("change")
         * Wird jedesmal ausgelöst wenn die Ansicht von Potrait auf Panorama bzw. anderherum gewechselt wird.
         * dims : Objekt: gibt die Höhe und die Breite des Geräts zurück. 
         */
        Dimensions.addEventListener("change", (dims) => {
            console.log(dims);

            if (500 > dims.screen.height) {
                this.setState({
                    respStyles: {
                        pwContainerDirection: "row",
                        pwContainerJustifyContent: "space-between",
                        pwWrapperWidth: "45%"
                    }
                })
            } else {
                this.setState({
                    respStyles: {
                        pwContainerDirection: "column",
                        pwContainerJustifyContent: "flex-start",
                        pwWrapperWidth: "100%"
                    }
                })
            }
        })
    }


    loginHandler = () => {
        startMainTabs();
    }

    render() {

        let headingText = null;

        /**
         * Dimensions.get("window").height überprüft welche Höhe gerade das Display hat.
         * Dadurch können wir bestimmen ob wir uns im Panorama oder im anderen Modus befinden.
         * Falls wir uns im horinzontalen Modus befinden soll die überschrift gesetzt werden.
         */
        if (Dimensions.get("window").height > 500) {
            headingText = (
                <MainText>
                    <HeadingText >Please Log In</HeadingText>
                </MainText>)
        }


        // underlineColorAndroid entfernt die borderbottom im input field in Android
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage} >
                <View style={styles.container}>
                    {headingText}
                    <ButtonWithBackground textColor="white" color="transparent" onPress={this.loginHandler} >Switch To Login</ButtonWithBackground>
                    <View style={styles.inputContainer}>
                        <DefaultInput placeholder="Your E-Mail Address" style={styles.input} />
                        <View style={{
                            flexDirection: this.state.respStyles.pwContainerDirection,
                            justifyContent: this.state.respStyles.pwContainerJustifyContent
                        }}>
                            <View style={{ width: this.state.respStyles.pwWrapperWidth }}>
                                <DefaultInput placeholder="Password" style={styles.input} />
                            </View>
                            <View style={{ width: this.state.respStyles.pwWrapperWidth }}>
                                <DefaultInput placeholder="Confirm Password" style={styles.input} />
                            </View>
                        </View>
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
        borderColor: "white"
    },
    passwordContainer: {
        flexDirection: Dimensions.get("window").height > 500 ? "column" : "row",
        justifyContent: "space-between"
    },
    passwordWrapper: {
        width: Dimensions.get("window").height > 500 ? "100%" : "45%"
    }
})

export default AuthScreen;