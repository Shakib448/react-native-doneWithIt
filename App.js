import React from "react";
import { Platform, StatusBar, StyleSheet, SafeAreaView } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return <ViewImageScreen />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "row",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
