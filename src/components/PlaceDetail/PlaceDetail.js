import React from "react";
import { StyleSheet, Modal, View, Image, Text, Button } from "react-native";


const placeDetail = props => {

    let modalContent = null;
    console.log("placeDetail", props);
    /* Wenn das übergebene Prop Objekt nicht NULL ist dann sollen Image und Text Komponente in Variable eingefügt werden
      mit den entsprechenden props */
    if (props.selectedPlace) {
        console.log("modalContent will be build")
        modalContent = (
            <View>
                <Image resizeMode="contain" source={props.selectedPlace.image} style={styles.placeImage} />
                <Text style={styles.placeName} >{props.selectedPlace.name}</Text>
            </View>
        )
    }
    return (
        <Modal
            onRequestClose={props.onModalClosed}   // onRequestClose MUSS gesetzt werden in einem Modal. Es bestimmt wie es geschlossen werden muss.(Nur Android)
            visible={props.selectedPlace !== null && props.selectedPlace !== undefined} // visible = nur sichtbar wenn das prop=selectedPlace übergeben worden ist 
            animationType={"slide"}                      // Typ der Animation
        >
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <Button title="Delete" color="orange" onPress={props.onItemDeleted} />
                    <Button title="Close" color="yellow" onPress={props.onModalClosed} />
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
        width: "100%"
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