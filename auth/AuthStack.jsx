import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import Register from "../screens/Register";
import Login from "../screens/Login";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="WelcomeScreen">
      <Stack.Screen
        options={{ header: () => null }}
        name="WelcomeScreen"
        component={WelcomeScreen}
      />
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
  );
}
