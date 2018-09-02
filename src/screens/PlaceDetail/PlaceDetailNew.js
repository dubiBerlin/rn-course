
/**
 * Diese PlaceDetail ist neu und eine Kopie von src/components/PlaceDetail/PlaceDetail.js aber OHNE Modal
 */

import React, { Component } from "react";
import { StyleSheet, View, Image, Text, Button, TouchableOpacity } from "react-native";

// Icons importieren
import Icon from "react-native-vector-icons/Ionicons";

// wir wollen den place über react-redux löschen also müssen wir connect importieren
// um die Komponente hier mit redux zu verbinden und wir müssen die Action Methode
// deletePlace importieren da sie die Action abfeuert zum Löschen des Places enthält.
// Sie kriegt auch den Key vom gelöscht werdenden PLace Objekt übergeben und übergibt diesen dann
// an die reducer Methode die dann die Logik enthält.
import { connect } from "react-redux";
import { deletePlace } from "../../store/actions/index";

class PlaceDetail extends Component {


    placeDeletedHandler = () => {
        this.props.onDeletePlace(this.props.selectedPlace.key);
        /** navigator.pop(): Eine react-native-navigation interne Fkt. die den jetztigen Screen 
         * vom stack wegnimmt und wieder zurück auf den vorherigen Screen leitet. */
        this.props.navigator.pop();
    }

    render() {
        return (
            < View style={styles.container} >
                <View>
                    <Image source={this.props.selectedPlace.image} style={styles.placeImage} />
                    <Text style={styles.placeImage}>{this.props.selectedPlace.name}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={this.placeDeletedHandler} >
                        <View style={styles.deleteIcon}>
                            <Icon size={30} name="md-trash" color="black" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }
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
});

const mapDispatchToProps = dispatch => {
    return {
        onDeletePlace: (key) => dispatch(deletePlace(key))
    }
}

export default connect(null, mapDispatchToProps)(PlaceDetail);