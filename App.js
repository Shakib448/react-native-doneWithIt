import React, { useState, useEffect } from "react";
import { TextInput, Text, Switch, Button, Image } from "react-native";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/lists/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import AppText from "./app/components/AppText";
import ImageInput from "./app/components/ImageInput";

export default function App() {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("You need to permission to access your photos");
    }
  };
  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const { cancelled, uri: imageUri } =
        await ImagePicker.launchImageLibraryAsync();
      if (!cancelled) {
        setImageUri(imageUri);
      }
    } catch (error) {
      console.log("Error reading in image", error);
    }
  };

  return (
    <Screen>
      <Button title="Select Image" onPress={selectImage} />
      <ImageInput imageUri={imageUri} />
    </Screen>
  );
}
