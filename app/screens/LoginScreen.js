import React from "react";
import { Image, StyleSheet } from "react-native";
import Screen from "./../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "./../components/AppButton";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";

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
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              placeholder="Email"
              icon="email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onBlur={() => setFieldTouched("email")}
              onChangeText={handleChange("email")}
            />
            <ErrorMessage
              color="danger"
              error={errors.email}
              visible={touched.email}
            />
            <AppTextInput
              placeholder="Password"
              icon="lock"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              onBlur={() => setFieldTouched("password")}
              onChangeText={handleChange("password")}
            />
            <ErrorMessage
              color="danger"
              error={errors.password}
              visible={touched.password}
            />

            <AppButton title="Login" onPress={handleSubmit} />
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
