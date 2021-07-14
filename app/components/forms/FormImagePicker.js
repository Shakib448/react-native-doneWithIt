import React from "react";
import ImageInputList from "./../ImageInputList";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

const FormImagePicker = ({ name, color }) => {
  const { errors, setFiledValue, touched, values } = useFormikContext();

  const imageUris = values[name];

  const handelAdd = (uri) => {
    setFiledValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setImageUris(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handelAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage
        error={errors[name]}
        visible={touched[name]}
        color={color}
      />
    </>
  );
};

export default FormImagePicker;
