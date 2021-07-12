import React, { useState } from "react";
import { TextInput, Text } from "react-native";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";

export default function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <Screen>
      <TextInput
        onChangeText={(text) => setFirstName(text)}
        placeholder="First name"
        style={{
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
        }}
        maxLength={5}
        keyboardType="numeric"
        secureTextEntry
      />
      <Text>{firstName}</Text>
    </Screen>
  );
}
