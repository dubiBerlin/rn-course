import React from "react";
import { StyleSheet, Modal, View, Image, Text, Button } from "react-native";

const placeDetail = props => {

    const image = "";
    const text = "";

    if (props.selectedPlace.placeImage) {
        image = (
            <Image source={props.selectedPlace.placeImage } />

        )
    }
    if(props.selectedPlace.placeName){
        text = (<Text>{props.selectedPlace.placeName }</Text>)
    }

    <Modal visible={props.selectedPlace}>
        <View style={styles.modalContainer}>
            
            {image}
            {text}
            <View>
                <Button title="Delete" color="red" />
                <Button  title="Close"/>
            </View>
        </View>
    </Modal>
};

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    }
}) 

export default placeDetail;