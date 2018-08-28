import React from "react";
import { StyleSheet, Modal, View, Image, Text, Button } from "react-native";


// let image = null;
// let text = null;

// if (props.selectedPlace.placeImage) {
//     image = (
//         <Image source={props.selectedPlace.placeImage} />
//     )
// }
// if (props.selectedPlace.placeName) {
//     text = (<Text>{props.selectedPlace.placeName}</Text>)
// }
const placeDetail = props => {

    let modalContent = null;

    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image resizeMode="contain" source={props.selectedPlace.image} style={styles.placeImage} />
                <Text style={styles.placeName} >{props.selectedPlace.name}</Text>
            </View>
        )
    }
    return (
        <Modal visible={props.selectedPlace !== null} animation="slide" >
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <Button title="Delete" color="orange" />
                    <Button title="Close" color="yellow" />
                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    placeImage: {
        marginRight: 8,
        height: 200,
        width: 200
    },
    placeName: {
        textAlign: "center",
        color: "blue",
        marginTop: 10,
        marginBottom: 10,
        fontWeight: "bold",
        fontSize: 28
    }
})

export default placeDetail;