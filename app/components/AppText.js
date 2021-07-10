import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../config/colors";

const AppText = ({ children, color = "black" }) => {
  return (
    <Text style={[styles.text, { color: colors[color] }]}>{children}</Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontSize: 20,
    fontFamily: "Roboto",
  },
});
