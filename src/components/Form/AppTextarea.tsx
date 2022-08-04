import { IonLabel, IonTextarea } from "@ionic/react";
import { useFormikContext } from "formik";
import React, { useState } from "react";
import clsxm from "../../lib/clsxm";

import { AppFormItem, AppLabel } from "./index";
function AppTextarea({ name, ...props }) {
  const {
    setFieldTouched,
    handleChange,
    errors,
    touched,
    values,
    isSubmitting,
  } = useFormikContext();
  const [focused, setFocused] = useState(false);
  const error = touched[name] ? errors[name] : undefined;
  const label = `${name[0].toUpperCase()}${name.slice(1)}`;
  return (
    <AppFormItem
      className={clsxm(
        "[&_.label-floating]:!mt-1.5",
        "[&_textarea]:!pt-0.5",
        "[&_textarea]:!mb-1.5",
        "[&_textarea]:!-mt-1",
        "[--min-height:0px]"
      )}
      {...{ error, focused }}
    >
      <IonLabel
        position="floating"
        {...{ errors, error, focused, label, name, value: values[name] }}
      >
        {label}
      </IonLabel>
      <IonTextarea
        name={name}
        value={values[name]}
        placeholder={error ? label : undefined}
        className={clsxm("", props.className)}
        onIonChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => {
          setFieldTouched(name);
          setFocused(false);
        }}
        disabled={isSubmitting}
        {...props}
      />
    </AppFormItem>
  );
}

export default AppTextarea;
