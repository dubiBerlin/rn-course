import React from "react";
import { StyleSheet, Modal, View, Image, Text, Button, TouchableOpacity } from "react-native";

// Icons importieren
import Icon from "react-native-vector-icons/Ionicons";


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
                    <TouchableOpacity onPress={props.onItemDeleted} >
                        <View style={styles.deleteIcon}>
                            <Icon size={30} name="md-trash" color="black" />
                        </View>
                    </TouchableOpacity>
                    <Button title="Close" color="#e3e8ef" onPress={props.onModalClosed} />
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
    },
    deleteIcon: {
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10
    }
})

export default placeDetail;