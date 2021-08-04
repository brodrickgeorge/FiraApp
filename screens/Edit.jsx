import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../styles/Global";

export default function Edit({ route }) {
  return (
    <View style={globalStyles.centerItem}>
      <Text>Editing... {route.params.title} </Text>
    </View>
  );
}
