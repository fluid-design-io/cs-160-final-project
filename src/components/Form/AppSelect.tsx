import { IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import { Field, useFormikContext } from "formik";
import { useState } from "react";

import { AppFormItem } from "./index";
import { AppSelectProps } from "../../interfaces/form";

function AppSelect({
  name,
  options,
  label = undefined,
  defaultValue = undefined,
  show,
  ...props
}: AppSelectProps) {
  const { setFieldTouched, handleChange, errors, touched, values } =
    useFormikContext();
  const [focused, setFocused] = useState(false);
  const error = touched[name] ? errors[name] : undefined;
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
      className="capitalize"
      interface="popover"
      component={AppSelectComponent}
      {...{
        name,
        label,
        options,
        defaultValue,
        focused,
        error,
        show,
        values,
        ...props,
      }}
    />
  );
}
const AppSelectComponent = ({
  label,
  name,
  field,
  form,
  error,
  focused,
  options,
  show,
  values,
  ...props
}) => {
  const isShowing = show && show(field.value, values);
  const optionLabel = (o) => {
    if (Array.isArray(o)) {
      return o
        .map((p, i) =>
          i < 5 ? `${p} ` : i < 6 ? ` +${o.length - 7} more` : null
        )
        .join("\r");
    } else {
      return o;
    }
  };
  if (isShowing !== undefined && !isShowing) {
    return null;
  }

  return (
    <AppFormItem {...{ error, focused }} {...props}>
      <IonLabel>{label ? label : name}</IonLabel>
      <IonSelect {...{ ...field, ...props }}>
        {options.map((option) => (
          <IonSelectOption
            key={`${name}.${option.toString()}`}
            value={option}
            className="capitalize"
          >
            {optionLabel(option)}
          </IonSelectOption>
        ))}
      </IonSelect>
    </AppFormItem>
  );
};

export default AppSelect;
