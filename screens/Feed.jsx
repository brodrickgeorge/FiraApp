import React, { useState } from "react";

import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { globalStyles } from "../styles/Global";

export default function Feed({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);

  return (
    <SafeAreaView style={globalStyles.containerSA}>
      <View style={globalStyles.container}>
        <FlatList
          data={reviews}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("ReviewDetails", item)}
            >
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
