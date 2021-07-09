import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Alert,
  StatusBar,
  Platform,
} from "react-native";

export default function App() {
  const handleAlert = () => {
    Alert.alert("Error", "Button Attack", [
      { text: "Yes", onPress: () => console.log("Yes") },
      { text: "No", onPress: () => console.log("No") },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button color="orange" title="Alert" onPress={handleAlert}></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
