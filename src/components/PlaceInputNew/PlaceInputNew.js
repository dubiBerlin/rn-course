import React from "react";
import DefaultInput from "../UI/DefaultInput/DefaultInput";

class PlaceInputNew extends React.Component {
    state = {
        placeName: ""
    };

    placeNameChangedHandler = val => {
        this.setState({
            placeName: val
        });
    };

    render() {
        return (
            <DefaultInput
                placeholder="An awesome places"
                value={this.state.placeName}
                onChangeText={this.placeNameChangedHandler}
            />
        );
    }
}


export default PlaceInputNew;
