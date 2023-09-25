import { Fragment, useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { globalStyles } from "../styles/Global";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      cliente: "Maria paula",
      data: "28/09/2023",
      hora: "14",
      key: "1",
    },
    {
      cliente: "Roberta Teixeira",
      data: "28/09/2023",
      hora: "15",
      key: "2",
    },
    {
      cliente: 'Gabriela Lopes',
      data: "28/09/2023",
      hora: "17",
      key: "3",
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            cons
            onPress={() => navigation.navigate("reviwDetails", item)}
          >
            <Text style={globalStyles.titleText}>{item.cliente} <Text>data:{item.data}</Text> </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}


