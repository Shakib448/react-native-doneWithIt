import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import defaultStyles from "../../app/config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NewListingButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={defaultStyles.colors.white}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
};

export default NewListingButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: defaultStyles.colors.primary,
    height: 70,
    width: 70,
    borderRadius: 35,
    bottom: 25,
    borderColor: defaultStyles.colors.white,
  },
});
