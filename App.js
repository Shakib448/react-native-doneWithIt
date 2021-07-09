import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  TouchableNativeFeedback,
  View,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("Press");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello React Native
      </Text>
      <TouchableNativeFeedback onPress={handlePress}>
        <View style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}>
          {/* <Image
            // blurRadius={10}
            fadeDuration={1000}
            source={{
              width: 200,
              height: 300,
              uri: "https://picsum.photos/200/300",
            }}
          /> */}
        </View>
      </TouchableNativeFeedback>
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
