import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TodoItem({ item, hendleTaskClick }) {
  if (item.completed) {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => hendleTaskClick(item.key)}>
          <Text style={styles.completed}>{item.title}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>X</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity onPress={() => hendleTaskClick(item.key)}>
        <Text style={styles.text}>{item.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    padding: 16,
    marginTop: 16,
    color: "#eee",
    fontSize: 18,

    borderColor: "chartreuse",
    borderWidth: 1,
    borderRadius: 10,
  },
  completed: {
    padding: 16,
    marginTop: 16,
    color: "#eee",
    fontSize: 18,

    borderColor: "chartreuse",
    borderWidth: 1,
    borderLeftWidth: 12,
    borderRadius: 10,
  },
  container:{
    flex: 2,    
  }
});
