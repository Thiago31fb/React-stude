//   cd "gamezone-tutorial-net-ninja"
//   npx expo start

// npx expo install expo-font
// npm install --save expo
// npm install @react-navigation/native
// https://reactnative.dev/docs/navigation#usage
// npm install @react-navigation/native-stack
// npm install react-native-screens react-native-safe-area-context
// npx expo install react-native-screens react-native-safe-area-context
// $ npm install  react-native-stack

import { useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Navigate from './routes/drawer';

import { NavigationContainer } from "@react-navigation/native";



SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer>
          <Navigate />
      </NavigationContainer>
    </View>
  );
}



export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    // backgroundColor: "orange",
  },
});
