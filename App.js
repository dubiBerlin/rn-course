import React from "react";
import { StyleSheet, Text, View } from "react-native";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";

export default class App extends React.Component {
  state = {
<<<<<<< HEAD
    placeName: "",
=======
>>>>>>> secondbranch
    places: []
  };


  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      };
    });
  };

<<<<<<< HEAD
  placeSubmitHandler = () => {};

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder="An awesome place"
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          />

          <Button
            title="Add"
            style={styles.button}
            accessibilityLabel="Learn more about this purple button"
            onPress={this.placeSubmitHandler}
          />
        </View>
=======
  placeDeletedHandler = index => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place, i) => {
          return i !== index;
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
>>>>>>> secondbranch
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
