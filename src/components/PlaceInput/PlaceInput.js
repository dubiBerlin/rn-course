import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

class PlaceInput extends React.Component {
  state = {
    placeName: ""
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  /* Funktion die aufgerufen wird wenn der button 
     gedrückt wird. Sie ruft die Funktion auf die als
     prop von der oberen Komponente übergeben wurde(App.js)
     In der oberen Komponente wurde dem prop der Name "onPlaceAdded" gegeben.  */
  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.props.onPlaceAdded(this.state.placeName);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder="An awesome place"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
        />

        <Button
          title="Add"
          style={styles.placeButton}
          accessibilityLabel="Learn more about this purple button"
          onPress={this.placeSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});

export default PlaceInput;
