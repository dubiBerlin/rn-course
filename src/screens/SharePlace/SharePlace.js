import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PlaceInput from "../../components/PlaceInput/PlaceInput";

// Importe für Redux
// connect verbindet diese Komponente mit redux
import { connect } from "react-redux";
// ActionCreator Funktionen importieren damit diese aufgerufen werden können um eine Action 
// zu feuern. An sie wird auch der Userinput übergeben.
import { addPlace } from "../../store/actions/index";

class SharePlaceScreen extends Component {
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


    /* Diese Funktion übergibt über den prop onAddPlace 
    den Namen an die ActionCreator Funktion.
    onAddPlace ist ja in mapDispatchToProps definiert */
    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName);
    };

    render() {
        return (
            <View>
                <PlaceInput onPlaceAdded={this.placeAddedHandler} />
            </View>
        );
    }
}

// mapDispatchToProps: bindet die ActionCreator Funktionen die ja in Store/Actions/places definiert sind mit der Komponente hier.
// Jede einzelne Actioncreator Funktion wird einer Property im Objekt zugewiesen. Über dieser Property kann die Komponente
// dann auf die ActionCreator zugrreifen und ihr Parameter also Usereingaben übergeben. 
// dispatch wird durch die Funktion connect automatisch als Parameter hier eigefügt und ist selbst eine Funktion.
// Die ActionCreator Funktionen lösen dann eine Action aus und übergeben dann ein Objekt mit welches den ActionType und die Usereingabe
// enthält an die Reducer Funktionen. Die enthalten die Logik, ändern den state und speichern ihn dann in den Store. 
// 
const mapDispatchToProps = (dispatch) => {
    return {
        onAddPlace: (name) => dispatch(addPlace(name))
    }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);