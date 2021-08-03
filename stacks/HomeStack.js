import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Button } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import Feed from "../screens/Feed";

const Stack = createStackNavigator();

export default function HomeStack() {
  const { logout } = useContext(AuthContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{
          headerRight: () => {
            return <Button title="Logout" onPress={() => logout()} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}