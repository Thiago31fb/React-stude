// npx create-expo-app projetoTeste
// npm install --global expo-cli
// cd AwesomeProject
// npx expo start

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.testo}>Vamoooo poha!</Text>
      <StatusBar style="auto" />
      <Button title="DON'T TOUCH ME" onPress={() => Alert.alert("poha...")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#444",
    alignItems: "center",
    justifyContent: "center",
  },
  testo: {
    color: "chartreuse",
    fontSize: 60,
    textAlign: "center",
  },
});
