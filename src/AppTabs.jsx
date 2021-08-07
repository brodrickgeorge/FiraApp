import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "../stacks/HomeStack";
import SearchStack from "../stacks/SearchStack";
import ProfileStack from "../stacks/ProfileStack";

const Tabs = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Search") {
            iconName = "search1";
          } else {
            return (
              <MaterialCommunityIcons
                name="account-outline"
                size={30}
                color={color}
              />
            );
          }
          // You can return any component that you like here!
          return <AntDesign name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Search" component={SearchStack} />
      <Tabs.Screen
        name="Profile"
        component={ProfileStack}
        // options={{
        //   tabBarLabel: "Profile",
        //   tabBarIcon: () => (
        //     <MaterialCommunityIcons
        //       name="account-outline"
        //       size={30}
        //       color="black"
        //     />
        //   ),
        // }}
      />
    </Tabs.Navigator>
  );
}
