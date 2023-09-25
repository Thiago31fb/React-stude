import Home from "../screens/home";
import ReviwDetails from "../screens/reviwDetails";
import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStack = createNativeStackNavigator();

const Navigate = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={Home}
          options={{ title: "Nail Design Agenda" }}
        />
        <HomeStack.Screen
          name="reviwDetails"
          component={ReviwDetails}
          options={{ title: "Cliente" }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;