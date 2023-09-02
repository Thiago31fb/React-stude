// cd "aula sala"
// npx create-expo-app projetoTeste
// npm install --global expo-cli
// cd projetoTeste
// npx expo start

import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function App() {
  const [dataNascimento, setDataNascimento] = useState("");
  const [idade, setIdade] = useState("");

  const calcularIdade = () => {
    const dataNascimentoArray = dataNascimento.split("-");
    const anoNascimento = parseInt(dataNascimentoArray[0]);
    const mesNascimento = parseInt(dataNascimentoArray[1]);
    const diaNascimento = parseInt(dataNascimentoArray[2]);

    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth() + 1;
    const diaAtual = dataAtual.getDate();

    let idadeCalculada = anoAtual - anoNascimento;

    if (
      mesAtual < mesNascimento ||
      (mesAtual === mesNascimento && diaAtual < diaNascimento)
    ) {
      idadeCalculada--;
    }

    setIdade(idadeCalculada.toString());
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Calculadora de Idade</Text>
      <TextInput
        placeholder="Data de Nascimento (AAAA-MM-DD)"
        value={dataNascimento}
        onChangeText={(text) => setDataNascimento(text)}
      />
      <Button title="Calcular Idade" onPress={calcularIdade} />
      <Text>Sua idade é: {idade} anos</Text>
    </View>
  );
}