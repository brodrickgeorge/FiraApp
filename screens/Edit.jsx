import React, { useState, useRef, useEffect } from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../styles/Global";

function apiCall(x) {
  return x;
}

export default function Edit({ route, navigation }) {
  const [formState] = useState();

  const submit = useRef();

  submit.current = () => {
    //api call with new form state
    apiCall(formState);
    navigation.goBack();
  };

  useEffect(() => {
    navigation.setParams({ submit });
  }, []);

  return (
    <View style={globalStyles.centerItem}>
      <Text>Editing... {route.params.title} </Text>
    </View>
  );
}
