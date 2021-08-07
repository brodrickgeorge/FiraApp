import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import UserProfile from "../screens/UserProfile";
import { addAnimeRoutes } from "../src/addAnimeRoutes";

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={UserProfile} />
      {addAnimeRoutes(Stack)}
    </Stack.Navigator>
  );
}
