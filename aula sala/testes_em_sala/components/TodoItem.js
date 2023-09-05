import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons"; 
export default function TodoItem({ item, hendleTaskClick, presHandler }) {
  if (item.completed) {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => hendleTaskClick(item.key)}>
          <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => presHandler(item.key)}>
          <AntDesign name="closecircleo" size={24} color="chartreuse" />
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.container2}>
        <TouchableOpacity onPress={() => hendleTaskClick(item.key)}>
          <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => presHandler(item.key)}>
          <AntDesign name="closecircleo" size={24} color="chartreuse" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "#eee",
    fontSize: 18,
  },

  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",

    padding: 16,
    marginTop: 16,
    color: "#eee",
    fontSize: 18,

    borderColor: "chartreuse",
    borderWidth: 1,
    borderLeftWidth: 12,
    borderRadius: 10,
  },
  container2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",

    padding: 16,
    marginTop: 16,
    color: "#eee",
    fontSize: 18,

    borderColor: "chartreuse",
    borderWidth: 1,
    borderRadius: 10,
  },
});
