import React from "react";
import { StyleSheet, View, ScrollView, FlatList } from "react-native";

import ListItem from "../ListItem/ListItem";


// ScrollView Version
// const placeList = props => {
//   // bekommt array als prop und durchläuft es
//   const placesOutput = props.places.map((place, i) => (
//     <ListItem key={i} placeName={place} onItemPressed={() => props.onItemDeleted(i)} />
//   ));

//   return <ScrollView style={styles.listContainer}>{placesOutput}</ScrollView>;
// };

const placeList = props => {
  /* properties:
   * data = ist ein array welches im Hintergrund als Datenquelle  
   * benutzt wird.
   * renderItem bekommt eine Funktion die das element zeichnet.
   * Den Parameter (info) kann man nennen wie man möchte. Über diesen
   * Parameter greift man auf die Werte zu, die gerendert werden. */
  return (<FlatList
    data={props.places}
    style={styles.listContainer}
    renderItem={(info) =>
      (<ListItem
        placeName={info.item.value}
        onItemPressed={() => props.onItemDeleted(info.item.key)} />
      )}
  />)
};
const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});
export default placeList;
