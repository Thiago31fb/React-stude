// npx create-expo-app tutorial-react-native-net-ninja
// cd tutorial-react-native-net-ninja
// npm install react-native-web
// npx expo start
// https://reactnative.dev/docs/textinput referencias
import { useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "Thiago", id: "1" },
    { name: "Luccas", id: "2" },
    { name: "Emily", id: "3" },
    { name: "Maria", id: "4" },
    { name: "Joao", id: "5" },
    { name: "Kevin", id: "6" },
    { name: "Assis", id: "7" },
    { name: "Rapha", id: "8" },
  ]);

  const pressHandler = (id) =>{
    console.log(id)
    setPeople((prevPeople)=>{
      return prevPeople.filter(person => person.id != id)
    })
  }
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>

            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* <ScrollView>
        {people.map((item) => (
          <View id={item id}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}
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
    marginHorizontal:10,
    
  },
});
