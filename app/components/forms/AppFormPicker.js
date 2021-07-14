import React from "react";
import AppPicker from "./../AppPicker";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

const AppFormPicker = ({
  items,
  name,
  PickerItemComponent,
  width,
  placeholder,
  numColumns,
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        numColumns={numColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
        PickerItemComponent={PickerItemComponent}
      />
      <ErrorMessage
        color="danger"
        error={errors[name]}
        visible={touched[name]}
      />
    </>
  );
};

export default AppFormPicker;
