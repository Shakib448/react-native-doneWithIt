import React from "react";
import AppPicker from "./../AppPicker";
import ErrorMessage from "./ErrorMessage";
import { userFormikContext } from "formik";

const AppFormPicker = ({ items, name, placeholder }) => {
  const { error, setFiledValue, touched, values } = userFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFiledValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={error[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
