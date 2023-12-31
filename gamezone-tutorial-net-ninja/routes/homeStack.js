import Home from "../screens/home";
import ReviwDetails from "../screens/reviwDetails";
import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStack = createNativeStackNavigator();

const Navigate = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#ddd", headerTintColor: "" },
          headerTintColor: "#444",
          // cardStyle: { height: 40 }, nao consegui almentar ou diminui a barra de navegacao
        }}
      >
        <HomeStack.Screen
          name="Home"
          component={Home}
          options={{
            title: "GameZone",
          }}
        />
        <HomeStack.Screen
          name="reviwDetails"
          component={ReviwDetails}
          options={{
            title: "Reviw Details",
          }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
