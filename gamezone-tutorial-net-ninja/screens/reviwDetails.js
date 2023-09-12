import React from "react";

import { StyleSheet, View, Text, FlatList } from "react-native";
import { globalStyles } from "../styles/Global";

export default function ReviwDetails({ route }) {
  return (
    <View style={globalStyles.container}>
      <Text>{route.params.title}</Text>
      <Text>{route.params.body}</Text>
      <Text>{route.params.rating}</Text>
    </View>
  );
}

