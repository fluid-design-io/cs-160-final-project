import { IonInput, IonLabel } from "@ionic/react";
import { Field, useFormikContext } from "formik";
import { useState } from "react";

import { AppFormItem } from "./index";
import { AppInputProps } from "../../interfaces/form";
import clsxm from "../../lib/clsxm";
function AppInput({ name, placeholder, show, ...props }: AppInputProps) {
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
    <Field
      slot="end"
      placeholder={label}
      onIonChange={handleChange}
      onFocus={() => setFocused(true)}
      onBlur={() => {
        setFieldTouched(name);
        setFocused(false);
      }}
      component={AppInputComponent}
      {...{
        name,
        label,
        placeholder,
        focused,
        error,
        show,
        values,
        isSubmitting,
        ...props,
      }}
    />
  );
}

export const AppInputComponent = ({
  field,
  form,
  name,
  label,
  placeholder,
  focused,
  error,
  show,
  values,
  isSubmitting,
  ...props
}) => {
  const isShowing = show && show(field.value, values);
  if (isShowing !== undefined && !isShowing) {
    return null;
  }
  const labelText = error ? error : label ? label : name;
  return (
    <AppFormItem {...{ error, focused }} {...props}>
      <IonLabel className={clsxm(error && "!text-xs")}>{labelText}</IonLabel>
      <IonInput
        slot="end"
        disabled={isSubmitting}
        placeholder={placeholder ? placeholder : label ? label : name}
        className={clsxm(
          "text-right bg-transparent",
          props?.className
        )}
        {...field}
        {...props}
      />
    </AppFormItem>
  );
};

export default AppInput;
