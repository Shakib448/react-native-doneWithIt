import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  const handlePress = () => console.log("Press");

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text numberOfLines={1} onPress={handlePress}>
          Open up App.js Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Odio molestiae dignissimos, laborum quo ut facere itaque sequi
          corporis quasi cumque.
        </Text>
      </View>
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
