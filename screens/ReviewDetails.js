import React from "react";
import { View, Text, Button } from "react-native";

import { globalStyles } from "../styles/Global";

export default function ReviewDetails({ route, navigation }) {
  return (
    <View style={globalStyles.containerSA}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>{route.params.title}</Text>
        <Text style={globalStyles.titleText}>{route.params.body}</Text>
        <Text style={globalStyles.titleText}>{route.params.rating}</Text>
      </View>
      <Button
        title="Edit"
        color="red"
        onPress={() =>
          navigation.navigate("Edit", { title: route.params.title })
        }
      />
    </View>
  );
}
