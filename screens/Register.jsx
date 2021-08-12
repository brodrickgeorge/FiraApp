import React, { useContext } from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppButton from "../components/Button";
import { AuthContext } from "../auth/AuthProvider";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function Register({ navigation }) {
  const { login } = useContext(AuthContext);
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="firstName"
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          placeholder="First Name"
        />
        <AppFormField
          name="lastName"
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          placeholder="Last Name"
        />
        <AppFormField
          name="email"
          placeholder="Email"
          icon="email"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <AppFormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          textContentType="password"
          secureTextEntry
        />

        <AppButton
          title="Register"
          color="darkOrange"
          onPress={() => {
            login();
          }}
        />
        <AppButton
          title="Back"
          color="darkOrange"
          onPress={() => {
            navigation.navigate("WelcomeScreen");
          }}
        />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  container: {
    padding: 10,
    backgroundColor: "coral",
  },
});
