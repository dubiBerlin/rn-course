import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";



const listItem = props => (
  // TouchableOpacity macht es drückbar deswegen kann man onPress Methode einfügen 
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
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
    borderRadius: 10
  }
});

export default listItem;
