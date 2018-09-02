
/**
 * Diese PlaceDetail ist neu und eine Kopie von src/components/PlaceDetail/PlaceDetail.js aber OHNE Modal
 */

import React from "react";
import { StyleSheet, View, Image, Text, Button, TouchableOpacity } from "react-native";

// Icons importieren
import Icon from "react-native-vector-icons/Ionicons";


const placeDetail = props => {

    return (
        <View style={styles.container}>
            <View>
                <Image source={props.selectedPlace.image} style={styles.placeImage} />
                <Text style={styles.placeImage}>{props.selectedPlace.name}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={props.onItemDeleted} >
                    <View style={styles.deleteIcon}>
                        <Icon size={30} name="md-trash" color="black" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        margin: 22
    },
    placeImage: {
        marginRight: 8,
        height: 200,
        width: "100%"
    },
    placeName: {
        textAlign: "center",
        color: "blue",
        marginTop: 10,
        marginBottom: 10,
        fontWeight: "bold",
        fontSize: 28
    },
    deleteIcon: {
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10
    }
})

export default placeDetail;