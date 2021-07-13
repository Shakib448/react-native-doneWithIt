import React from "react";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

const AppFormFiled = ({ name, width, ...otherProps }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        {...otherProps}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
      />
      <ErrorMessage
        color="danger"
        error={errors[name]}
        visible={touched[name]}
      />
    </>
  );
};

export default AppFormFiled;
