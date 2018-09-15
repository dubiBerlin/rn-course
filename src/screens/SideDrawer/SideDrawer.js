import React, { Component } from "react";

// Dimensions damit kann man die Größe des aktuellen Geräts herausfinden
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class SideDrawer extends Component {
    render() {


        return (
            // Fürden SideDrawer in Android sollte man width setzen
            //style={styles.main}
            <View style={[
                styles.container,
                { width: Dimensions.get("window") * 0.8 }]}>
                <TouchableOpacity>
                    <View style={styles.drawerItem}>
                        <Icon
                            style={styles.drawerItemIcon}
                            size={30}
                            name={Platform.OS === "android" ? "md-log-out" : "ios-log-out"}
                            color="#aaa" />
                        <Text
                            style={styles.drawerItemText}>
                            Sign Out
                            </Text>
                    </View>

                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: "white"
    },
    drawerItem: {
        backgroundColor: "#eee",
        flexDirection: 'row',
        alignItems: "center",
        padding: 10
    },
    drawerItemIcon: {
        margin: 10
    },
    drawerItemText: {
        margin: 5,
        fontSize: 17
    }
})
export default SideDrawer;