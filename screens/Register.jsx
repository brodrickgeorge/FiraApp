import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

import { globalStyles } from "../styles/Global";

export default function Register({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.containerSA}>
      <View style={globalStyles.centerItem}>
        <Text>I am the Register screen</Text>
        <Button
          title="Login"
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
      </View>
    </SafeAreaView>
  );
}
