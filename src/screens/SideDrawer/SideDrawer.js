import React, { Component } from "react";

// Dimensions damit kann man die Größe des aktuellen Geräts herausfinden
import { View, Text, Dimensions, StyleSheet } from "react-native";

class SideDrawer extends Component {
    render() {
        return (
            // Fürden SideDrawer in Android sollte man width setzen
            <View style={{ width: Dimensions.get("window") * 0.8 }}>
                <Text>SideDrawer</Text>
            </View>
        );
    }
}

export default SideDrawer;