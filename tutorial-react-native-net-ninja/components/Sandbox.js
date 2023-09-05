import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Sandbox() {
  return (
    <View style={styles.container}>
        <Text style={styles.boxOne}>One</Text>
        <Text style={styles.boxTwo}>Two</Text>
        <Text style={styles.boxThree}>Three</Text>
        <Text style={styles.boxFour}>Four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // flexDirection: 'column',
    flexDirection: "row",

    // justifyContent:'center',
    // justifyContent:'flex-end',
    // justifyContent:'flex-start',
    // justifyContent:'space-around',
    // justifyContent:'space-between',
    justifyContent: "space-evenly",

    // alignItems: 'baseline',
    alignItems: "center",
    // alignItems: 'flex-end',
    // alignItems: 'flex-start',
    // alignItems: 'stretch',

    paddingTop: 40,
    backgroundColor: "#aaa",
  },
  boxOne: {
    flex: 1,
    backgroundColor: "violet",
    padding: 10,
  },
  boxTwo: {
    flex: 2,
    backgroundColor: "gold",
    padding: 20,
  },
  boxThree: {
    flex: 1,
    backgroundColor: "coral",
    padding: 30,
  },
  boxFour: {
    flex: 3,
    backgroundColor: "skyblue",
    padding: 50,
  },
});
