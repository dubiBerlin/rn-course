import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import ListItem from "../ListItem/ListItem";



const placeList = props => {
  // bekommt array als prop und durchläuft es
  const placesOutput = props.places.map((place, i) => (
    <ListItem key={i} placeName={place} onItemPressed={() => props.onItemDeleted(i)} />
  ));

  return <ScrollView style={styles.listContainer}>{placesOutput}</ScrollView>;
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});
export default placeList;
