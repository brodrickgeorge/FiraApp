import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Feed from "../screens/Feed";
import ReviewDetails from "../screens/ReviewDetails";
import Edit from "../screens/Edit";

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
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: route.params.title,
        })}
        name="ReviewDetails"
        component={ReviewDetails}
      />
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: `Edit:  ${route.params.title}`,
          headerRight: () => (
            <Button
              color="green"
              title="Done"
              onPress={() => {
                //Submit
              }}
            />
          ),
        })}
        name="Edit"
        component={Edit}
      />
    </Stack.Navigator>
  );
}
