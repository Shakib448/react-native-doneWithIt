import React from "react";
import { Image, StyleSheet } from "react-native";
import Screen from "./../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "./../components/AppButton";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";
import AppFormFiled from "../components/AppFormFiled";
import SubmitButton from "./../components/SubmitButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).max(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.screen}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {() => (
          <>
            <AppFormFiled
              placeholder="Email"
              icon="email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              name="email"
            />
            <AppFormFiled
              placeholder="Password"
              icon="lock"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              name="password"
            />
            <SubmitButton title="Login" />
          </>
        )}
      </Formik>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
