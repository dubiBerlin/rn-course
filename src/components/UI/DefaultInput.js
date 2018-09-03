import React, { Component } from "react";
import { StyleSheet, TextInput } from "react-native";

const defaultInput = props => (
    <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        {...props} // wir können hier alle props hinzufügen die wir möchten, die werden automatisch von der Komponente übernommen.
    />
);


const styles = StyleSheet.create({
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#eee",
        padding: 5,
        margin: 8,
        borderRadius: 5
    }
})

export default defaultInput;