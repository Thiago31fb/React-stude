import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import  Header  from "./components/Header";
import  TodoItem  from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
export default function App() {
  const [tasks, setTasks] = useState([
    {
      key: "1",
      title: "estudar Programacao",
      completed: false,
    },
    {
      key: "2",
      title: "Ler Livros",
      completed: true,
    },
    {
      key: "3",
      title: "Arrumar o quarto",
      completed: true,
    },
  ]);
  const presHandler = (key) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.key != key);
    });
  };

  const hendleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (taskId === task.key) return { ...task, completed: !task.completed };

      return task;
    });
    setTasks(newTasks);
  };

  const submitTask = (text) => {
    if (text.length >= 2) {
      setTasks((prevTasks) => {
        return [{ key: Math.random().toString(), title: text, completed: false, }, ...prevTasks];
      });
    } else {
      Alert.alert("OOPS!", "Pelo menos 2 caracteres ",[{text: 'Understood',onPress:()=> console.log('alert Closed') }]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() =>  Keyboard.dismiss()}>

    <View style={styles.container}>
      <Header />
      <AddTodo submitTask={submitTask} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          // <Text>{item.title}</Text>
          <TodoItem
            item={item}
            hendleTaskClick={hendleTaskClick}
            presHandler={presHandler}
          />
        )}
      />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
});
