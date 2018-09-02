import React from "react";
import { StyleSheet, Text, View } from "react-native";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import placeImage from "./src/assets/ljubis.jpg";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";

// Wir importieren die action creators die ja in der actions/places definiert sind aber über index.js export werden
import { addPlace, deletePlace, selectPlace, deselectPlace } from "./src/store/actions/index";

import { connect } from 'react-redux';

class App extends React.Component {

  /* Diese Funktion übergibt über onAddPlace 
     den Namen an die ActionCreator Funktion.
     onAddPlace ist ja in mapDispatchToProps definiert */
  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };


  placeDeletedHandler = () => {
    this.props.onDeleltePlace();
  }

  placeSelectHandler = key => {
    this.props.onSelectPlace(key);
  }

  modalCloseHandler = () => {
    this.props.onDeselectPlace();
  }

  // onItemDeleted wird im Unterkomponent als prop aufgerufen
  // innerhalb der onItemDeleted Funktion wird die Function
  // PlaceDeleteHandler aufgerufen
  render() {
    return (
      <View style={styles.container} >
        <PlaceDetail
          selectedPlace={this.props.selectedPlace} // ist ein Objekt und beinhaltet den ausgewählten Place
          onItemDeleted={this.placeDeletedHandler} // Funktion placeDeletedHandler wird an Unterkomponente übergeben. Bestimmt was im array gelöscht werden soll.
          // Unterkomponente greift über props.onItemDeleted auf diese Funktion zu
          onModalClosed={this.modalCloseHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.props.places} onItemSelected={this.placeSelectHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

/* mapStateToProps gibt ein Objekt zurück welches den globalen state, die ja in den reducern als
   allererstes definiert sind, in ein Objekt packt durch welches dann die App-Komponente über props auf diesen state
   zugreifen kann. 
   Der Zugriff auf die den globalen state von places und  selectedPlaces erfolgt über state.places.places/state.places.selectedPlace.
   Erklärung:
    state:  mapStateToProps bekommt über Redux den globalen state als Parameter übergeben. Er enthält alle einzelnen states.
    places: In store/reducers/places.js sind die beiden States "places" und "selectedPlace" erstellt. Dieser reducer wird in der Datei
            store/configureStore.js in der Methode combineReducers in ein Objekt gesteckt um ihn in den Store zu packen. Die Eigenschaft 
            für den places(.js) reducer ist "places". Dieser enthält also die beiden states aus places.js reducer über den wir dann auch die 
            beiden zugreifen können. */
const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
}

// mapDispatchToProps: bindet die ActionCreator Funktionen die ja in Store/Actions/places definiert sind mit der Komponente hier.
// Jede einzelne Actioncreator Funktion wird einer Property im Objekt zugewiesen. Über dieser Property kann die Komponente
// dann auf die ActionCreator zugrreifen und ihr Parameter also Usereingaben übergeben. 
// dispatch wird durch die Funktion connect automatisch als Parameter hier eigefügt und ist selbst eine Funktion.
// Die ActionCreator Funktionen lösen dann eine Action aus und übergeben dann ein Objekt mit welches den ActionType und die Usereingabe
// enthält an die Reducer Funktionen. Die enthalten die Logik, ändern den state und speichern ihn dann in den Store. 
// 
const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),  // onAddPlace
    onDeleltePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
