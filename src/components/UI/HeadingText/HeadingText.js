import React from "react";
import { StyleSheet, Text } from "react-native";

const textHeading = props => (
    <Text
        {...props}
        style={[styles.textHeading, props.style]}>{props.children} </Text>
);


const styles = StyleSheet.create({
    textHeading: {
        fontSize: 28,
        fontWeight: "bold"
    }
})

export default textHeading;