import React, { Component } from "react";
import { StyleSheet, TextInput } from "react-native";

const defaultInput = props => (
    <TextInput
        // wir können hier alle props hinzufügen die wir möchten, die werden automatisch von der Komponente übernommen. Muss vor style={} stehen
        // falls wir extra Styles von außen hinzufügen möchten. Falls {...props} hinter style={} stehen würde, würden extern hinzugefügte Styles
        // den hier intern erstellten style überschreiben.
        {...props}
        underlineColorAndroid="transparent"
        // styles muss hinter {...props} stehen damit der interne style nicht vom externen überschrieben wird und man muss den internen und den externen
        // hinzugefügten style in ein Array packen so damit alle hinzugefügten styles in einem Array gehalten werden. so wird kein style überschrieben.
        // Auch die Reihenfolge ist wichtig. Es muss immer zuerst der eigene intern definierte Style in das Array hinzugefügt werden und danach der Style
        // der extern über props hinzugefügt wird.
        style={[styles.input, props.style]}
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