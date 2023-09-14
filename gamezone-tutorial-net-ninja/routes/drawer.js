import * as React from "react";

import aboutStack from "./aboutStack";
import homeStack from "./homeStack";

import Home from "../screens/home";
import About from "../screens/about";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ drawerLabel: "Home" }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{ drawerLabel: "About" }}
      />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
