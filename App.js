import React from "react";
import { StyleSheet, Text, View } from "react-native";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import placeImage from "./src/assets/ljubis.jpg";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";


export default class App extends React.Component {
  state = {
    places: [],
    selectedPlace: null
  };

  /* Diese Funktion fügt ein Wort in das Array ein. Es wird an die
     PlaceInput Komponente weitergegeben */
  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: placeImage
        })
      };
    });
  };

  /* Löscht ein wort (Objekt bestehend aus key, value) aus dem Array.
     Es bekommt den Key des Objekts, es erstellt ein neues Array mithilfe von
     der filter funktion und dem alten Zustand prevState und nimmt nur dieObjekte
     die einen ungleichen key haben wir der übegebene. */
  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      }
    })
  }

  placeSelectHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      }
    });
  }

  modalCloseHandler = () => {
    this.setState({
      selectedPlace: null
    })
  }

  // onItemDeleted wird im Unterkomponent als prop aufgerufen
  // innerhalb der onItemDeleted Funktion wird die Function
  // PlaceDeleteHandler aufgerufen
  render() {
    return (
      <View style={styles.container} >
        <PlaceDetail
          selectedPlace={this.state.selectedPlace} // ist ein Objekt und beinhaltet den ausgewählten Place
          onItemDeleted={this.placeDeletedHandler} // Funktion placeDeletedHandler wird an Unterkomponente übergeben. Bestimmt was im array gelöscht werden soll.
          // Unterkomponente greift über props.onItemDeleted auf diese Funktion zu
          onModalClosed={this.modalCloseHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.state.places} onItemSelected={this.placeSelectHandler} />
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
