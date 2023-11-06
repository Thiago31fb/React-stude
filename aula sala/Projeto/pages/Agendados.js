import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";

// Importe sua função 'all' aqui
import Agenda from "../services/sqlite/Agenda";

export default function ListaClientesScreen({ navigation }) {
  const [clientes, setClientes] = useState([]);

  // Carregar dados dos clientes quando o componente for montado
  useEffect(() => {
    const carregarClientes = async () => {
      try {
        const clientesData = await Agenda.aEfetuar();
        // console.log(clientesData);
        setClientes(clientesData);
      } catch (error) {
        console.error("Erro ao carregar clientes:", error);
      }
    };

    carregarClientes();
  }, []);

  const getColorBasedOnDate = (dateString) => {
    const today = new Date().toLocaleString().split(" ")[0];
    const dateToCheck = dateString.split(" ")[0];
    if (today === dateToCheck) {
      // console.log("################")
      return "#ff99ce"; // Retorna a cor #eee se a data for igual à data de hoje
    } else {
      return "pink";
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Button
          title="Cadastrar"
          onPress={() => navigation.navigate("Cadastro")}
        />
        <Button
          title="Exibir Histórico "
          onPress={() => navigation.navigate("Histórico")}
        />
      </View>
      <Text style={styles.title}>Lista de Clientes:</Text>
      <View style={styles.formContainer}>
        <FlatList
          data={clientes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              cons
              onPress={() => navigation.navigate("Editar", item)}
            >
              <View
                style={{
                  backgroundColor: getColorBasedOnDate(item.date),
                  ...styles.card, // Você pode espalhar os estilos do objeto 'styles.card'
                }}
              >
                <Text style={styles.linha}>Nome: {item.name}</Text>
                <Text style={styles.linha2}>Serviço: {item.service}</Text>
                <Text style={styles.linha2}>Telefone: {item.phone}</Text>
                <Text style={styles.linha}>Data e Hora: {item.date}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
  },
  formContainer: {
    flex: 1,
    width: "90%",
    backgroundColor: "white",
    marginBottom: 5,
    padding: 20,
    borderRadius: 10,
  },
  card: {
    // backgroundColor: "pink",
    marginVertical: 10,
    padding: 16,
    borderRadius: 8,
    elevation: 4,
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  linha: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  linha2: {
    fontSize: 16,
    // fontWeight: "bold",
  },
});
