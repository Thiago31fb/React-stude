import * as React from "react";
import { NavigationContainer } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/stack";

import ViwList from "./ViwList";
import ViwRegister from "./ViwRegister";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ViwList" component={ViwList} />
        <Stack.Screen name="ViwRegister" component={ViwRegister} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
