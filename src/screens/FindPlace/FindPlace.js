import React, { Component } from 'react';
import { View, Text } from 'react-native';


// Wir müssen connect importieren da wir Daten aus dem Redux Store holen
import { connect } from "react-redux";

import PlaceList from "../../components/PlaceList/PlaceList";
import PlaceDetailNew from "../PlaceDetail/PlaceDetailNew";

class FindPlaceScreen extends Component {
    constructor(props) {
        super(props);

        // Wir binden -navigatorEvents an diese Komponente.
        // Jetzt können wir alle clicks auf buttons mitverfolgen. Wir können jedem Button eine id verpassen
        // und dann wird diese id im event abgefeuert und wir wissen genau welcher Button geklickt wurde.
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) {
        // NavBarButtonPress heisst dassirgendein Button in der NavBar gedrückt wurde
        // sideDrawerToggle ist die id des Buttons der gedrückt wurde. Bei der Erstellung des Buttons urde ihm diese id verpasst.
        if (event.type === "NavBarButtonPress") {
            if (event.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: "left",
                    animated: true,
                    animationType: 'slide-horizontal',
                    to: "open"
                })
            }
        }
    }

    selectPlace(e) {
        var place = this.props.places.find(function (element) {
            return element.key == e;
        });
        this.props.navigator.push({
            screen: 'awesome-places.PlaceDetailScreen', // unique ID registered with Navigation.registerScreen
            animationType: 'slide-horizontal', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
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