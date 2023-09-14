// cd "aula sala"
// npx create-expo-app projetoTeste
// npm install --global expo-cli
// cd projetoTeste
// npx expo start

import React, { useState } from "react";
import { View, Text, Switch, Image, StyleSheet } from "react-native";
import flor1 from "./assets/flor1.jpg";
import flor2 from "./assets/flor2.jpg";
export default function App() {
 
  const [image, setImage] = useState(flor1);

  const [isHabilita, setHabilita] = useState(false);
  const interruptor = () => {
    setHabilita((previousState) => !previousState)
    if(image == flor1){
      setImage(flor2);
    }
    else{
       setImage(flor1);
    }
  };
  
  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    stretch: {
      width: 330,
      height: 600,
      resizeMode: "stretch",
    },
  });

  
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image style={styles.stretch} source={image} />
      <Switch
        trackColor={{ false: "767577", true: "#81b0ff" }} //cor atrás do botão
        thumbColor={isHabilita ? "#f5dd4b" : "#f4f3f4"} // parte da frente do componente
        onValueChange={interruptor}
        value={isHabilita}
      />
    </View>
  );
}