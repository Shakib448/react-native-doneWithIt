import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import NetInfo from "@react-native-community/netinfo";

export default function App() {
  NetInfo.fetch().then((netinfo) => console.log(netinfo));
  return null;
}

// <NavigationContainer theme={navigationTheme}>
//   <AppNavigator />
// </NavigationContainer>
