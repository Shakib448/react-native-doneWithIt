import React from "react";
import { Text } from "react-native";
import defaultStyles from "../config/styles";

const AppText = ({ children, style, color = "black" }) => {
  return (
    <Text
      style={[styles.text, { color: colors[color] }, style, defaultStyles.text]}
    >
      {children}
    </Text>
  );
};

export default AppText;
