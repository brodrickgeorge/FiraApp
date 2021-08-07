import React from "react";
import { Button } from "react-native";

import Edit from "../screens/Edit";
import ReviewDetails from "../screens/ReviewDetails";

export const addAnimeRoutes = (Stack) => {
  return (
    <>
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
                route.params.submit?.current();
              }}
            />
          ),
        })}
        name="Edit"
        component={Edit}
      />
    </>
  );
};
