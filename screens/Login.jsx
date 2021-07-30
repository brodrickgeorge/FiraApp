import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import AuthProvider from "../src/AuthProvider";

import { globalStyles } from "../styles/Global";

export default function Login({ navigation }) {
  const { login } = useContext(AuthProvider);
  return (
    <View style={globalStyles.centerItem}>
      <Text>I am the login screen</Text>
      <Button
        title="Register"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
      <Button
        color="red"
        title="Log me in"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
      <Button
        color="coral"
        title="Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
}
