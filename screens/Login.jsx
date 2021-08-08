import React, { useContext } from "react";
import {
  View,
  Text,
  Button,
  ImageBackground,
  Image,
  StyleSheet,
} from "react-native";

import AppButton from "../components/Button";
import { AuthContext } from "../auth/AuthProvider";
import colors from "../styles/colors";
import { globalStyles } from "../styles/Global";

export default function Login({ navigation }) {
  const { login } = useContext(AuthContext);
  return (
    <View style={globalStyles.centerItem}>
      <ImageBackground
        source={require("../assets/background.png")}
        style={styles.background}
      >
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text>I am the login screen</Text>
        <Button
          title="Register"
          onPress={() => {
            navigation.navigate("Register");
          }}
        />
        <Button
          color="red"
          title="Log me in"
          onPress={() => {
            login();
          }}
        />
        <View style={styles.buttonsContainer}>
          <AppButton
            title="Login"
            onPress={() => {
              login();
            }}
          />
          <AppButton
            title="Register"
            color="darkOrange"
            onPress={() => {
              navigation.navigate("Register");
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: colors.primary,
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 300,
    height: 300,
    position: "absolute",
    top: 150,
  },
});
