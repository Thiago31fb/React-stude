import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Cadastro from "./pages/Cadastro";
import Agendados from "./pages/Agendados";
import Editar from "./pages/Editar";
import todosAgendados from "./pages/todosAgendados";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Agendados" component={Agendados} />
        <Stack.Screen name="Histórico" component={todosAgendados} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Editar" component={Editar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
