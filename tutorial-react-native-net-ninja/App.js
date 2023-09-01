// npx create-expo-app tutorial-react-native-net-ninja
// cd tutorial-react-native-net-ninja
// npm install react-native-web
// npx expo start
// https://reactnative.dev/docs/textinput referencias
import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("Thiago");
  const [age, setAge] = useState(22);

  const clickHandler = () => {
    setName('Barcelo')
    setPerson({name: 'luide', age: 30})
  }
  return (
    <View style={styles.container}>
      <Text>Enter name: </Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="Digite o novo nome"
        onChangeText={(value) => setName(value)}
      />
      <Text>Enter age: </Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="Digite a sua idade"
        onChangeText={(value) => setAge(value)}
      />
      <Text>
        His name is {name} and his age is {age}!!!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {


    borderWidth: 1,
    padding: 8,
    margin: 10,
    width: 200,
  },
});
