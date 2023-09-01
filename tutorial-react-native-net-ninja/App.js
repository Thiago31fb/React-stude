// npx create-expo-app tutorial-react-native-net-ninja
// cd tutorial-react-native-net-ninja
// npm install react-native-web
// npx expo start
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("Thiago");
  const [person, setPerson] = useState({name: 'mario', age: 40});

  const clickHandler = () => {
    setName('Barcelo')
    setPerson({name: 'luide', age: 30})
  }
  return (
    <View style={styles.container}>
      <Text>meu nome e {name}!!!</Text>
      <Text>His name is {person.name} and his age is {person.age}!!!</Text>
      <View style={styles.buttonContainer}>
        <Button title="Update state" onPress={clickHandler} />
      </View>
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
  buttonContainer:{
    marginTop: 20
  }
});
