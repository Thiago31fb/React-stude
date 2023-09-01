// npx create-expo-app tutorial-react-native-net-ninja
// cd tutorial-react-native-net-ninja
// npm install react-native-web
// npx expo start
// https://reactnative.dev/docs/textinput referencias
import { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "Thiago", key: "1" },
    { name: "Luccas", key: "2" },
    { name: "Emily", key: "3" },
    { name: "Maria", key: "4" },
    { name: "Joao", key: "5" },
    { name: "Kevin", key: "6" },
    { name: "Assis", key: "7" },
    { name: "Rapha", key: "8" },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((item) => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  },
});
