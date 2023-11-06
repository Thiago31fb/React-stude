import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Alert,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import Agenda from "../services/sqlite/Agenda";

import { AntDesign } from "@expo/vector-icons";

export default function CadastroScreen({ navigation, route }) {
  const [msgError, setMsgError] = useState("");
  const [id, setId] = useState(route.params.id);
  const [nome, setNome] = useState(route.params.name);
  const [telefone, setTelefone] = useState(route.params.phone);
  const [service, setService] = useState(route.params.service);
  const [dataHora, setDataHora] = useState(route.params.date);

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    setDataHora(date.toLocaleString());
  };

   const exibirMensagemDeConfirmacao = () => {
     Alert.alert(
       "Alerta!",
       "Você tem certeza de que deseja apagar esse registro?",
       [
         {
           text: "Cancelar",
           onPress: () => console.log("Ação cancelada"),
           style: "cancel",
         },
         {
           text: "Continuar",
           onPress: () => {
             // Coloque a ação que você deseja executar quando o usuário confirmar aqui
             Agenda.remove(id);
             navigation.reset({
               index: 0,
               routes: [{ name: "Agendados" }],
             });
             console.log("Ação confirmada");
           },
         },
       ],
       { cancelable: false }
     );
   };

  const handleCadastro = () => {
    if (nome && telefone && dataHora && service) {
      Agenda.update(id, {
        cliente: nome,
        phone: telefone,
        service: service,
        date: dataHora,
      });
      navigation.reset({
        index: 0,
        routes: [{ name: "Agendados" }],
      });
    } else {
      setMsgError("Digite todos os dados");
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        // console.log("Teclado descartado");
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Yasmin Nails</Text>
        <View style={styles.formContainer}>
          <Text style={styles.notInfo}>{msgError}</Text>

          <Text style={styles.label}>Nome do Cliente:</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            onChangeText={(text) => setNome(text)}
            value={nome}
          />

          <Text style={styles.label}>Telefone:</Text>
          <TextInput
            style={styles.input}
            placeholder="Telefone"
            value={telefone}
            onChangeText={setTelefone}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Serviço Desejado:</Text>
          <TextInput
            style={styles.input}
            placeholder="Observação"
            value={service}
            onChangeText={setService}
          />

          <Text style={styles.label}>Data e Hora:</Text>
          <Button title="Selecionar Data e Hora" onPress={showDatePicker} />

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="datetime"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />

          <Text style={styles.label}>Data e Hora Selecionadas:</Text>
          <Text style={styles.label}>{dataHora}</Text>

          <Button title="Editar" onPress={handleCadastro} />
        </View>
        <TouchableOpacity cons onPress={() => exibirMensagemDeConfirmacao()}>
          <Text style={styles.delete}>
            Excluir da agenda{" "}
            <AntDesign name="delete" size={30} color="white" />
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "pink",
  },
  formContainer: {
    width: "90%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  title: {
    marginTop: 60,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  delete: {
    backgroundColor: "#ff4d4d",
    padding: 5,
    borderRadius: 6,
    marginTop: 60,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: "pink",
  },
  input: {
    borderWidth: 1,
    borderColor: "pink",
    borderRadius: 5,
    marginBottom: 10,
    padding: 8,
    fontSize: 16,
  },
  notInfo: {
    color: "red",
    textAlign: "center",
    fontSize: 18,
    marginBottom: 16,
  },
});
