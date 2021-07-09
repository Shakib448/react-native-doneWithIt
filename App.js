import React from "react";
import { View, Platform, StatusBar, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{ backgroundColor: "dodgerblue", width: 100, height: 100 }}
      ></View>
      <View style={{ backgroundColor: "gold", width: 100, height: 100 }}></View>
      <View
        style={{ backgroundColor: "tomato", width: 100, height: 100 }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "row",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
