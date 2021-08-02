import React, { useState, useEffect, useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, ActivityIndicator } from "react-native";
import { AsyncStorage } from "react-native";

// import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { globalStyles } from "../styles/Global";
import { AuthContext } from "./AuthProvider";
import AppTabs from "./AppTabs";

const Stack = createStackNavigator();

export default function Routes() {
  const { user, login } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((userString) => {
        if (userString) {
          //decode it
          login();
        }
        setLoading(false);
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
      {user ? (
        <AppTabs />
      ) : (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            options={{ header: () => null }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="Register"
            options={{ header: () => null }}
            component={Register}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
