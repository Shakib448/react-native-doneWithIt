import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Screen from "./../components/Screen";
import * as Yup from "yup";
import {
  AppForm,
  AppFormFiled,
  SubmitButton,
  AppFormPicker,
  FormImagePicker,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import defaultStyles from "../config/styles";
import useLocation from "./../hooks/useLocation";
import listingApi from "../api/listings";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).max(1000).label("price"),
  description: Yup.string().label("Description"),
  category: Yup.string().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: defaultStyles.colors.primary,
    icon: "floor-lamp",
  },
  {
    label: "Cars",
    value: 2,
    backgroundColor: defaultStyles.colors.lightOrange,
    icon: "car",
  },
  {
    label: "Camera",
    value: 3,
    backgroundColor: defaultStyles.colors.yellow,
    icon: "camera",
  },
  {
    label: "Games",
    value: 4,
    backgroundColor: defaultStyles.colors.secondary,
    icon: "cards",
  },
  {
    label: "Clothing",
    value: 5,
    backgroundColor: defaultStyles.colors.lightCyan,
    icon: "shoe-heel",
  },
  {
    label: "Sports",
    value: 6,
    backgroundColor: defaultStyles.colors.lightBlue,
    icon: "basketball",
  },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: defaultStyles.colors.blue,
    icon: "headphones",
  },
  {
    label: "Books",
    value: 8,
    backgroundColor: defaultStyles.colors.parpel,
    icon: "book-open-variant",
  },
  {
    label: "Others",
    value: 9,
    backgroundColor: defaultStyles.colors.lightGray,
    icon: "browser",
  },
];

const ListingEditScreen = () => {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const { ok } = await listingApi.addListings(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!ok) {
      setUploadVisible(false);
      return alert("Could not save the listing");
    }
    resetForm();
  };

  return (
    <Screen style={styles.screen}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" color="danger" />

        <AppFormFiled maxLength={255} name="title" placeholder="Title" />

        <AppFormFiled
          placeholder="Price"
          maxLength={8}
          keyboardType="numeric"
          name="price"
          width={120}
        />

        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
          width="50%"
          PickerItemComponent={CategoryPickerItem}
          numColumns={3}
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

export default ListingEditScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});
