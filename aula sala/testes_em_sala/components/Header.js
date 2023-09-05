import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default function Header(){
    return (
      <View style={styles.header}>
        <Text style={styles.title}>Minhas Tarefas</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor:"#444",
    borderBottomWidth: 2,
    borderBottomColor: "chartreuse",
  },
  title:{
    textAlign: 'center',
    color: "chartreuse",
    fontSize: 22,
    
    fontWeight: 'bold',
  }
});