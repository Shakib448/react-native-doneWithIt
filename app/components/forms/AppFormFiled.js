import React from "react";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

const AppFormFiled = ({ name, width, ...otherProps }) => {
  const { setFieldTouched, setFieldValue, values, errors, touched } =
    useFormikContext();

  return (
    <>
      <AppTextInput
        {...otherProps}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
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
