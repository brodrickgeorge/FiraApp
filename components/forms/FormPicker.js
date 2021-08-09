import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../Picker";
import ErrorMessage from "./ErrorMessage";
import PickerItem from "../PickerItem";

function AppFormPicker({
  items,
  name,
  numberOfColumns,
  placeholder,
  width,
  PickerItemComponent,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
