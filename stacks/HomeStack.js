import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Feed from "../screens/Feed";
import { addAnimeRoutes } from "../src/addAnimeRoutes";
import colors from "../config/colors";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Feed">
      {addAnimeRoutes(Stack)}
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{
          headerStyle: {
            backgroundColor: colors.yellow,
          },
        }}
      />
    </Stack.Navigator>
  );
}
