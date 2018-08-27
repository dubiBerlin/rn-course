import React from "react";
import { Modal, View, Image, Text, Button } from "react-native";

const placeDetail = props => {

    const image = "";
    const text = "";

    if (props.selectedPlace) {

    }

    <Modal>
        <View>
            <Image source={props.selectedPlace ? props.selectedPlace.placeImage : null} />
            <Text>{props.selectedPlace ? props.selectedPlace.placeName : null}</Text>
            <View>
                <Button />
                <Button />
            </View>
        </View>
    </Modal>
};

export default placeDetail;