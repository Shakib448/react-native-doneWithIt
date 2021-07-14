import React from "react";
import { View, StyleSheet, Image } from "react-native";
import defaultStyles from "../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ImageInput = ({ imageUri }) => {
  return (
    <View style={styles.container}>
      {!imageUri && (
        <MaterialCommunityIcons
          name="camera"
          size={40}
          color={defaultStyles.colors.medium}
        />
      )}
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: defaultStyles.colors.light,
    height: 100,
    width: 100,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
