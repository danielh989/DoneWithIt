import React from "react";
import AppButton from "./AppButton";
import { useFormikContext } from "formik";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton onPress={handleSubmit} title={title}></AppButton>;
}

export default SubmitButton;
