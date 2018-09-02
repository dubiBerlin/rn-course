import React, { Component } from 'react';
import { View, Text } from 'react-native';


// Wir müssen connect importieren da wir Daten aus dem Redux Store holen
import { connect } from "react-redux";

import PlaceList from "../../components/PlaceList/PlaceList";
import PlaceDetailNew from "../PlaceDetail/PlaceDetailNew";

class FindPlaceScreen extends Component {

    selectPlace(e) {
        var place = this.props.places.find(function (element) {
            return element.key == e;
        });
        this.props.navigator.push({
            screen: 'awesome-places.PlaceDetailScreen', // unique ID registered with Navigation.registerScreen
            animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
            backButtonHidden: false, // hide the back button altogether (optional)
            passProps: { selectedPlace: place }, // Object that will be passed as props to the pushed screen (optional)
            animated: true,
            title: place.name
        });
    }


    render() {
        return (
            <View>
                {/*die props wurden über mapStateToProps übergeben*/}
                <PlaceList places={this.props.places} onItemSelected={this.selectPlace.bind(this)} />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        // 1. places greift auf die im rootReducer in der Datei /Store/configureStore.js
        // 2. places wurde in der Reducer Datei selbst definiert. Do wird auch der globale State für
        //    für die entsprechende Komponente definiert die darauf zugreift.
        places: state.places.places
    }
}

export default connect(mapStateToProps)(FindPlaceScreen);