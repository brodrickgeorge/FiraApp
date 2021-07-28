import React from "react";
import { View, Text, Button } from "react-native";

import { globalStyles } from "../styles/Global";

export default function Login({ navigation }) {
  return (
    <View style={globalStyles.centerItem}>
      <Text>I am the login screen</Text>
      <Button
        title="Register"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
    </View>
  );
}
