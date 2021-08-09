import React, { useContext } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { AuthContext } from "../auth/AuthProvider";

import Icon from "../components/Icon";
import ListItems from "../components/ListItems";
import ListItemSeperator from "../components/ListItemSeperator";
import Screen from "../components/Screen";
import colors from "../config/colors";

const menuItems = [
  {
    title: "Favorites",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.yellow,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.darkOrange,
    },
  },
];

export default function UserProfile() {
  const { logout } = useContext(AuthContext);

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItems
          title="Brodrick George"
          subTitle="fira.com"
          image={require("../assets/brodrick.jpeg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItems
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItems
        onPress={() => logout()}
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.lightGrey,
  },
});
