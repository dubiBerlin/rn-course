import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import MainText from "../../components/UI/MainText/MainText";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import backgroundImage from "../../assets/background2.jpg";
import PlaceInputNew from "../../components/PlaceInputNew/PlaceInputNew";
import PickImage from "../../components/PickImage/PickImage";
import PickLocation from "../../components/PickLocation/PickLocation";

// Importe für Redux
// connect verbindet diese Komponente mit redux
import { connect } from "react-redux";
// ActionCreator Funktionen importieren damit diese aufgerufen werden können um eine Action 
// zu feuern. An sie wird auch der Userinput übergeben.
import { addPlace } from "../../store/actions/index";

class SharePlaceScreen extends Component {

    state = {
        placeName: ""
    };

    constructor(props) {
        super(props);

        // Wir binden -navigatorEvents an diese Komponente.
        // Jetzt können wir alle clicks auf buttons mitverfolgen. Wir können jedem Button eine id verpassen
        // und dann wird diese id im event abgefeuert und wir wissen genau welcher Button geklickt wurde.
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
        this.placeNameChangedHandler = this.placeNameChangedHandler.bind(this)
    }


    // diese Funktion wird an die PlaceInputNew Komponente übergeben um dort den Wert aus dem TextInput-Feld zu holen und
    // hier in den eigenen state zu setzen.
    placeNameChangedHandler = val => {
        if (val !== null) {
            this.setState({
                placeName: val
            });
        }
    };

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
    placeAddedHandler = () => {
        if (this.state.placeName.trim() !== "") {
            this.props.onAddPlace(this.state.placeName);
        }
    };

    render() {
        return (
            <ScrollView>
                <ImageBackground source={backgroundImage} style={styles.backgroundImage} >
                    <View style={styles.container}>
                        <HeadingText >
                            <MainText styles={styles.title} >Share a place with us</MainText>
                        </HeadingText>
                        <PickImage />
                        <PickLocation />
                        <PlaceInputNew style={styles.placeInputNew} placeName={this.state.placeName} onChangeText={this.placeNameChangedHandler} />
                        {/* So würden wir props übergeben um auf den Wert zuzgreifen wenn PlaceInputNew eine ClassBased Komponente wäre
                              <PlaceInputNew style={styles.placeInputNew} onChanging={this.placeNameChangedHandler} />*/}
                        <View style={styles.button} >
                            <Button title="Share The Place!" onPress={this.placeAddedHandler} />
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        );
    }
}
/**
 * container: man setzt diesen container auf die äußerste View innerhalb der ScrollView und die flex:1 damit der gesamte
 *            Bildschirm angesprochen wird und alignItems auf center damit alles mittig gesetzt wird.
 * previewImage: wird dem Vorschaubild zugeordnet welches als ImageBackground in die view gesteckt wird. Sie muss eine Größe bekommen, width,height oder flex
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    button: {
        margin: 8
    },
    backgroundImage: {
        flex: 1
    },
    title: {
        color: "#f7f7ff"
    },
    // previewImage: {
    //     width: "100%",
    //     height: "100%"
    // },
    placeInputNew: {
        backgroundColor: "white"
    }
})

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