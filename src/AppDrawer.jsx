import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeStack from "../stacks/HomeStack";
import SearchStack from "../stacks/SearchStack";

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Search" component={SearchStack} />
    </Drawer.Navigator>
  );
}
