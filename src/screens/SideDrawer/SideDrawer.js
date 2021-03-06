import React, { Component } from "react";

// Dimensions damit kann man die Größe des aktuellen Geräts herausfinden
import { View, Text, Dimensions, StyleSheet } from "react-native";

class SideDrawer extends Component {
    render() {
        return (
            // Fürden SideDrawer in Android sollte man width setzen
            <View style={[
                styles.container,
                { width: Dimensions.get("window") * 0.8 }]}>
                <Text>SideDrawer</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 22,
        backgroundColor: "white",
        flex: 1
    }
})
export default SideDrawer;