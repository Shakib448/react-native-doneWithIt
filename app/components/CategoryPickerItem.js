import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "./Icon";
import AppText from "./AppText";

const CategoryPickerItem = ({ onPress, item }) => {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingHorizontal: 20,
    alignItems: "center",
    alignContent: "center",
    marginTop: 10,
    width: "33%",
  },
  label: {
    marginTop: 10,
    marginBottom: 20,
    textAlign: "center",
  },
});
