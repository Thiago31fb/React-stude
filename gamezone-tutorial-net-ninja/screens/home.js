import React from "react";

import { StyleSheet, View, Text, Button } from "react-native";

import { globalStyles } from "../styles/Global";

export default function Home({navigation}) {

  const pressHandler = () => {
    navigation.navigate('reviwDetails')
    // navigation.push('reviwDetails')
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title="Go to review dets" onPress={pressHandler} />
    </View>
  );
}

