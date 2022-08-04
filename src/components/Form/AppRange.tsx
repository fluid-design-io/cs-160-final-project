import { IonLabel, IonRange } from "@ionic/react";
import { Field, useFormikContext } from "formik";
import { useState } from "react";

import { AppFormItem } from "./index";
import { AppRangeProps } from "../../interfaces/form";
function AppRange({
  name,
  label = undefined,
  show,
  min,
  max,
  step,
  snaps = false,
  ticks = false,
  ...props
}: AppRangeProps) {
  const { setFieldTouched, handleChange, errors, touched, values } =
    useFormikContext();
  const [focused, setFocused] = useState(false);
  const error = touched[name] ? errors[name] : undefined;
  return (
    <Field
      slot="end"
      placeholder={label}
      onIonChange={(e) => {
        handleChange(e);
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => {
        setFieldTouched(name);
        setFocused(false);
      }}
      className="capitalize"
      {...{
        name,
        label,
        focused,
        error,
        show,
        values,
        min,
        max,
        snaps,
        ticks,
        step,
        ...props,
      }}
      component={AppRangeComponent}
    />
  );
}
const AppRangeComponent = ({
  label,
  name,
  field,
  form,
  error,
  show,
  values,
  focused,
  ...props
}) => {
  const isShowing = show && show(field.value, values);
  if (isShowing !== undefined && !isShowing) {
    return null;
  }
  return (
    <AppFormItem {...{ error, focused }} {...props}>
      <IonLabel>{label ? label : values[name]}</IonLabel>
      <IonRange {...field} />
    </AppFormItem>
  );
};

export default AppRange;
