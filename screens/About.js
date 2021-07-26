import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { globalStyles } from "../styles/Global";

export default function About() {
  return (
    <SafeAreaView style={globalStyles.containerSA}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>About Screen</Text>
      </View>
    </SafeAreaView>
  );
}
