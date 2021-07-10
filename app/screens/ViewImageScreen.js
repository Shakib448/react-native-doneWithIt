import React from "react";
import { Image, StyleSheet } from "react-native";

const ViewImageScreen = () => {
  return <Image style={styles.image} source={require("../assets/chair.png")} />;
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
});
