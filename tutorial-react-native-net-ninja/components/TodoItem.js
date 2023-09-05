import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
export default function TodoItem({ item, presHandler }) {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => presHandler(item.key)}>
        <MaterialIcons name="delete" size={24} color="#333" />
      </TouchableOpacity>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row",
  },
  text: {
    marginLeft: 12,
  },
});
