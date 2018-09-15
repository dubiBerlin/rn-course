

/**
 * Wir brauchen einen Button der Transparent ist weil wir im Auth-Screen ein BackgroundImage haben.
 * Es ist nicht möglich einen Button auf transparent zu setzen, deswegen müssen wir eine eigene Komoponente 
 * als Button erstellen.
 */


import React from "react";
import {
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    Text,
    View,
    Platform
} from "react-native";

const buttonWithBackground = props => {


    const content = (
        <View style={[styles.button, { backgroundColor: props.color }]}>
            <Text style={{ color: props.textColor }}>
                {props.children}
            </Text >
        </View>);

    return (
        <TouchableOpacity onPress={props.onPress} >
            {content}
        </TouchableOpacity>
    )

    /**
     * Hier wird geschaut in welchem OS wir uns befinden und je nachdem wird das 
     * entsprechende Touchable - Objekt zurückgegeben.  TouchableNativeFeedback gibt unseren Buttons
     * eine hässliche Breite. TouchableOpacity lässt sie so breit sein wie weit der Text geht 
     * also bleiben wir bei TouchableOpacity.
     */

    // if (Platform.OS === "android") {
    //     return (
    //         <TouchableNativeFeedback onPress={props.onPress} >
    //             {content}
    //         </TouchableNativeFeedback>)
    // }
    // if (Platform.OS === "iOS") {
    //     return (
    //         <TouchableOpacity onPress={props.onPress} >
    //             {content}
    //         </TouchableOpacity>
    //     )
    // }


};


const styles = StyleSheet.create({
    button: {
        padding: 11,
        margin: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "white",
        width: "80%"
    }
})

export default buttonWithBackground;