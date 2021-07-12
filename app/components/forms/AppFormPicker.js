import React from "react";
import AppPicker from "./../AppPicker";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

const AppFormPicker = ({ items, name, placeholder }) => {
  const { errors, setFiledValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFiledValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
