import React from "react";
import { StyleSheet, View, Button, Alert } from "react-native";

export default function App() {
  const handleAlert = () => {
    Alert.alert("Error", "Button Attack", [
      { text: "Yes", onPress: () => console.log("Yes") },
      { text: "No", onPress: () => console.log("No") },
    ]);
  };

  return (
    <View style={styles.container}>
      <Button color="orange" title="Alert" onPress={handleAlert}></Button>
    </View>
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
