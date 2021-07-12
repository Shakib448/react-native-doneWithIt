import React from "react";
import { TouchableOpacity } from "react-native";
import AppText from "./AppText";

const PickerItem = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText>{label}</AppText>
    </TouchableOpacity>
  );
};

export default PickerItem;
