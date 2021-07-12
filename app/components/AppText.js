import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import colors from "../config/colors";

const AppText = ({ children, style, color = "black" }) => {
  return (
    <Text style={[styles.text, { color: colors[color] }, style]}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontSize: 16,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
