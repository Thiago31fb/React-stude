import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function AddTodo({ submitTask }) {
  const [text, setText] = useState("");
  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Nova tarefa  ..."
        placeholderTextColor="#eee"
        onChangeText={changeHandler}
      />
      <Button onPress={() => submitTask(text)} title="Add todo" color="#444" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    fontSize: 16,
    color:"#eee",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "chartreuse",
  },
});
