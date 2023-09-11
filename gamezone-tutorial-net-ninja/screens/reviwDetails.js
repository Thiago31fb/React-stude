import React from "react";

import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/Global";

export default function ReviwDetails({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.paragraph}>ReviwDetails Screen</Text>
      <Button title="Back to home screen" onPress={pressHandler} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
