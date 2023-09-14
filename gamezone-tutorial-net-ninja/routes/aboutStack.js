import About from "../screens/about";
import ReviwDetails from "../screens/reviwDetails";

import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStack = createNativeStackNavigator();

const AboutStack = () => {
  return (
      <HomeStack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#ddd" },
          headerTintColor: "#444",
          // cardStyle: { height: 40 }, nao consegui almentar ou diminui a barra de navegacao
        }}
      >
        <HomeStack.Screen
          name="About"
          component={About}
          options={{
            title: "About GameZone",
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
  );
};

export default AboutStack;
