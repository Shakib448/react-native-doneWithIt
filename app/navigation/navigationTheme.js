import { DefaultTheme } from "@react-navigation/native";
import defaultStyles from "../config/styles";

console.log(DefaultTheme);

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: defaultStyles.colors.primary,
    background: defaultStyles.colors.white,
  },
};
