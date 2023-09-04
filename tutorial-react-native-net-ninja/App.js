// npx create-expo-app tutorial-react-native-net-ninja
// cd tutorial-react-native-net-ninja
// npm install react-native-web
// npx expo start
// https://reactnative.dev/docs/textinput referencias
import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
const [todos, setTodos] = useState([
  {text: 'buy coffee', key: '1'},
  {text: 'create an app', key: '2'},
  {text: 'play on the switcy', key: '3'},
])
const presHandler = (key) =>{
  setTodos((prevTodos) =>{
    return prevTodos.filter(todo => todo.key != key)
  })
}
const submitTodo = (text) =>{
  setTodos((prevTodos) =>{
    return [
      {text: text, key: Math.random().toString() },
      ...prevTodos
    ]
  })
}
 
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitTodo={submitTodo} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} presHandler={presHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    padding: 20,
  },
});
