import React, { useState, useEffect, useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { globalStyles } from "../styles/Global";
import { AuthContext } from "./AuthProvider";

const Stack = createStackNavigator();

export default function Routes() {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((userString) => {
        if (userString) {
          //decode it
        } else {
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return (
      <View style={globalStyles.centerItem}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          options={{
            headerTitle: "FIRA",
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Register"
          options={{ header: () => null }}
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
