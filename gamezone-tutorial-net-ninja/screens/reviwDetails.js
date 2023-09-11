import React from "react";

import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/Global";

export default function ReviwDetails() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.paragraph}>ReviwDetails Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
