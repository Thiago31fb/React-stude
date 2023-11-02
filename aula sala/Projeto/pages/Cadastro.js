import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const CadastroScreen = () => {
  const [nome, setNome] = useState("");
  const [horario, setHorario] = useState("");

  const handleCadastro = () => {
    // Lógica para lidar com o cadastro aqui (por exemplo, enviar para um servidor).
    console.log("Nome:", nome);
    console.log("Horário:", horario);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={(text) => setNome(text)}
      />

      <Text style={styles.label}>Horário:</Text>
      <TextInput
        style={styles.input}
        value={horario}
        onChangeText={(text) => setHorario(text)}
      />

      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFC0CB", // Cor de fundo rosa claro
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default CadastroScreen;
