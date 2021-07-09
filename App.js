import React from "react";
import { StyleSheet, SafeAreaView, Button } from "react-native";

export default function App() {
  const handlePress = () => console.log("Press");

  return (
    <SafeAreaView style={styles.container}>
      <Button color="orange" title="Click me" onPress={handlePress}></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
