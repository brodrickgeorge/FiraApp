import React, { useState } from "react";
import { View, Button } from "react-native";
import { globalStyles } from "../styles/Global";
import Feed from "./Feed";

export default function Search({ navigation }) {
  const [show, setShow] = useState(false);
  return (
    <View style={globalStyles.centerItem}>
      <Button
        title="Search Anime"
        onPress={() => {
          setShow(true);
        }}
      />
      {show ? <Feed navigation={navigation} /> : null}
    </View>
  );
}
