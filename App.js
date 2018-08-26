import React from "react";
import { StyleSheet, Text, View } from "react-native";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";

export default class App extends React.Component {
  state = {
    places: []
  };

  /* Diese Funktion fügt ein Wort in das Array ein. Es wird an die
     PlaceInput Komponente weitergegeben */
  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({ key: Math.random(), value: placeName })
      };
    });
  };

  /* Löscht ein wort (Objekt bestehend aus key, value) aus dem Array.
     Es bekommt den Key des Objekts, es erstellt ein neues Array mithilfe von
     der filter funktion und dem alten Zustand prevState und nimmt nur dieObjekte
     die einen ungleichen key haben wir der übegebene. */
  placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key;
        })
      }
    })
  }

  // onItemDeleted wird im Unterkomponent als prop aufgerufen
  // innerhalb der onItemDeleted Funktion wird die Function
  // PlaceDeleteHandler aufgerufen
  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.state.places} onItemDeleted={this.placeDeletedHandler} />
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
