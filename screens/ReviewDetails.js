import React from "react";
import { View, Text } from "react-native";

import { SafeAreaView } from "react-navigation";
import { globalStyles } from "../styles/Global";

export default function ReviewDetails({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.containerSA}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>
          {navigation.getParam("title")}
        </Text>
        <Text style={globalStyles.titleText}>
          {navigation.getParam("body")}
        </Text>
        <Text style={globalStyles.titleText}>
          {navigation.getParam("rating")}
        </Text>
      </View>
    </SafeAreaView>
  );
}
