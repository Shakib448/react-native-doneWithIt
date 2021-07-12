import React from "react";
import AppText from "./AppText";

const ErrorMessage = ({ error, color, visible }) => {
  if (!visible || !error) return null;

  return <AppText color={color}>{error}</AppText>;
};

export default ErrorMessage;
