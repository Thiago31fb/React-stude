// cd "aula sala"
// npx create-expo-app projetoTeste
// npm install --global expo-cli
// cd projetoTeste
// npx expo start

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";

export default function App() {
  const [login, setLogin] = useState();
  const [senha, setSenha] = useState();

  function logar(L, S) {
    console.log(L);
    console.log(S);
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#555",
      paddingTop: 50,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    container2: {
      borderRadius: 12,
      backgroundColor: "#333",
      padding: 12,
    },
    input: {
      height: 40,
      width: 190,
      margin: 12,
      color: "#eee",
      borderRadius: 8,
      borderWidth: 1,
      padding: 10,
    },
    title: {
      textAlign: "center",
      color: "chartreuse",
      fontSize: 24,

      fontWeight: "bold",
    },
  });
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.container2}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Usuario..."
            placeholderTextColor="#eee"
            onChangeText={setLogin}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha..."
            placeholderTextColor="#eee"
            secureTextEntry={true}
            onChangeText={setSenha}
          />
          <Button
            onPress={() => logar(login, senha)}
            title="Comfirmar"
            color="#408000"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
