import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Search from "../screens/Search";
import { addAnimeRoutes } from "../src/addAnimeRoutes";

const Stack = createStackNavigator();

export default function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
      {addAnimeRoutes(Stack)}
    </Stack.Navigator>
  );
}
