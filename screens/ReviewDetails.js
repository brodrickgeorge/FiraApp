import React from "react";
import { View, Text } from "react-native";

import { SafeAreaView } from "react-navigation";
import { globalStyles } from "../styles/Global";

export default function ReviewDetails({ route }) {
  return (
    <SafeAreaView style={globalStyles.containerSA}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>{route.params.title}</Text>
        <Text style={globalStyles.titleText}>{route.params.body}</Text>
        <Text style={globalStyles.titleText}>{route.params.rating}</Text>
      </View>
    </SafeAreaView>
  );
}
