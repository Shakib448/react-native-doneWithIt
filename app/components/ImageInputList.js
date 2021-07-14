import React from "react";
import { View, StyleSheet } from "react-native";
import ImageInput from "./ImageInput";

const ImageInputList = ({ imageUris, onRemoveImage, onAddImage }) => {
  return (
    <View style={styles.container}>
      {imageUris?.map((uri) => (
        <View kye={uri} style={styles.image}>
          <ImageInput imageUri={uri} onChangeImage={() => onRemoveImage(uri)} />
        </View>
      ))}
      <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
    </View>
  );
};

export default ImageInputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});
