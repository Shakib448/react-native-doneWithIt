import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../config/colors";

const ListIemSeparator = () => {
  return <View style={styles.separator} />;
};

export default ListIemSeparator;

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});
