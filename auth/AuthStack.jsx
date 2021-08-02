import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import Register from "../screens/Register";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
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
  );
}
