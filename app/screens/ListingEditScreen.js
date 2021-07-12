import React from "react";
import { StyleSheet } from "react-native";
import Screen from "./../components/Screen";
import * as Yup from "yup";
import {
  AppForm,
  AppFormFiled,
  SubmitButton,
  AppFormPicker,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).max(1000).label("price"),
  description: Yup.string().label("Description"),
  category: Yup.string().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

const LoginScreen = () => {
  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormFiled maxLength={255} name="title" placeholder="Title" />
        <AppFormFiled
          placeholder="Email"
          maxLength={8}
          keyboardType="numeric"
          name="price"
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
        />
        <AppFormFiled
          multiline
          maxLength={255}
          name="description"
          placeholder="Description"
          numberOfLines={3}
        />

        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});
