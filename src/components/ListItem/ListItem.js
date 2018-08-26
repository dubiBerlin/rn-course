import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";



const listItem = props => (
  // TouchableOpacity macht es drückbar deswegen kann man onPress Methode einfügen 
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Image resizeMode="contain" source={props.placeImage} style={styles.placeImage} />
      <Text >{props.placeName}</Text>

    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    marginTop: 5,
    borderRadius: 10,
    flexDirection: "row", /* row damit image und text nebeneinander stehen */
    alignItems: "center"
  },
  placeImage: {
    marginRight: 8,
    height: 50,
    width: 50
  }
});

export default listItem;
