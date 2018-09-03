

/**
 * Wir brauchen einen Button der Transparent ist weil wir im Auth-Screen ein BackgroundImage haben.
 * Es ist nicht möglich einen Button auf transparent zu setzen, deswegen müssen wir eine eigene Komoponente 
 * als Button erstellen.
 */


import React from "react";
import { StyleSheet, TouchableHighlight, Text, View } from "react-native";

const buttonWithBackground = props => (
    <TouchableHighlight onPress={props.onPress} >
        <View style={[styles.button, { backgroundColor: props.color }]}>
            <Text style={{ color: props.textColor }}>
                {props.children}
            </Text >
        </View>
    </TouchableHighlight>
);


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