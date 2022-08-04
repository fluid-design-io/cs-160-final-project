import { IonLabel, IonToggle } from "@ionic/react";
import { Field, useFormikContext } from "formik";
import { useState } from "react";

import { AppFormItem } from "./index";
import { AppToggleProps } from "../../interfaces/form";

function AppToggle({
  name,
  label = undefined,
  show,
  ...props
}: AppToggleProps) {
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
  return (
    <Field
      placeholder={label}
      onIonChange={(e) =>
        handleChange({
          target: { value: e.detail.checked, name },
        })
      }
      onFocus={() => setFocused(true)}
      onBlur={() => {
        setFieldTouched(name);
        setFocused(false);
      }}
      className="capitalize"
      component={AppToggleComponent}
      {...{
        name,
        label,
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
const AppToggleComponent = ({
  label,
  name,
  field,
  form,
  error,
  show,
  values,
  focused,
  isSubmitting,
  ...props
}) => {
  const isShowing = show && show(field.value, values);
  if (isShowing !== undefined && !isShowing) {
    return null;
  }
  return (
    <AppFormItem {...{ error, focused }} {...props}>
      <IonLabel>{label ? label : values[name]}</IonLabel>
      <IonToggle
        color="success"
        checked={field.value}
        {...props}
        {...field}
        disabled={isSubmitting}
      />
    </AppFormItem>
  );
};
export default AppToggle;
