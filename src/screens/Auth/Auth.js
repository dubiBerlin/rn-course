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
        viewMode: Dimensions.get("window").height > 500 ? "potrait" : "landscape"
    }


    constructor(props) {
        super(props);
        this.updateStyles.bind(this);
        console.log("constructor Auth")
        /**
         * Dimensions.addEventListener("change")
         * Wird jedesmal ausgelöst wenn die Ansicht von Potrait auf Panorama bzw. anderherum gewechselt wird.
         * dims : Objekt: gibt die Höhe und die Breite des Geräts zurück. 
         */
        // Dimensions.addEventListener("change", (dims) => {
        //     console.log(dims);
        // });
        Dimensions.addEventListener("change", this.updateStyles); // Die callback Funkt wurde ausgelagert in die "updateStyles"
    }

    /**
     * componentWillUnmount() is called every time when a component is removed by switching 
     * to another component. Deswegen müssen wir die Eventlistener entfernen.
     * 
     */
    componentWillUnmount() {
        console.log("componentWillUnmount");
        Dimensions.removeEventListener("change", this.updateStyles);
    }

    updateStyles = (dims) => {
        var viewMode = dims.window.height > 500 ? "potrait" : "landscape";
        this.setState = ({
            viewMode
        });
        console.log("state: " + this.state.viewMode + " viewMode: " + viewMode);
    }


    loginHandler = () => {
        startMainTabs();
    }

    render() {
        console.log("state in render: " + this.state.viewMode);
        let headingText = null;

        /**
         * Dimensions.get("window").height überprüft welche Höhe gerade das Display hat.
         * Dadurch können wir bestimmen ob wir uns im Panorama oder im anderen Modus befinden.
         * Falls wir uns im horinzontalen Modus befinden soll die überschrift gesetzt werden.
         */
        // if (Dimensions.get("window").height > 500) {
        //     headingText = (
        //         <MainText>
        //             <HeadingText >Please Log In</HeadingText>
        //         </MainText>)
        // }

        // neue Version
        if (this.state.viewMode == "potrait") {
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
                        <View style={this.state.viewMode === "potrait" ? styles.portraitPasswordContainer : styles.landscapePasswordContainer}>
                            <View style={this.state.viewMode === "potrait" ? styles.portraitPasswordWrapper : styles.landscapePasswordWrapper}>
                                <DefaultInput placeholder="Password" style={styles.input} />
                            </View>
                            <View style={this.state.viewMode === "potrait" ? styles.portraitPasswordWrapper : styles.landscapePasswordWrapper}>
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
    landscapePasswordContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    landscapePasswordWrapper: {
        width: "45%"
    },
    portraitPasswordContainer: {
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    portraitPasswordWrapper: {
        width: "100%"
    }
})

export default AuthScreen;