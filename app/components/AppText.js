import React from "react";
import { Text } from "react-native";
import defaultStyles from "../config/styles";

const AppText = ({ children, style, color = "black", ...otherProps }) => {
  return (
    <Text
      {...otherProps}
      style={[
        style,
        defaultStyles.text,
        { color: defaultStyles.colors[color] },
      ]}
    >
      {children}
    </Text>
  );
};

export default AppText;
