import React from "react";

import { StyleSheet, View, Text, FlatList } from "react-native";
import { globalStyles } from "../styles/Global";

export default function ReviwDetails({ route }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{route.params.cliente}</Text>
      <Text style={styles.texto}>{route.params.data}</Text>
      <Text>{route.params.hora} Horas</Text>
    </View>
  );
}



export const styles = StyleSheet.create({
  texto: {
    padding: 10,
    fontSize: 20,
  },
});