import { IonInput, IonLabel } from "@ionic/react";
import { Field, useFormikContext } from "formik";
import { useState } from "react";

import { AppFormItem } from "./index";
import { AppInputProps } from "../../interfaces/form";
import clsxm from "../../lib/clsxm";
function AppStackedInput({ name, placeholder, show, ...props }: AppInputProps) {
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
    <AppFormItem
      className={clsxm(
        "[&_.ios_input]:!pt-0.5",
        "[&_.ios_input]:!mb-1.5",
        "[&_.ios_.label-floating]:!mt-1.5",
        "[&:not(.item-has-focus):not(.item-has-value)_.label-floating.sc-ion-label-ios-h]:!translate-y-[12px]",
        "[--min-height:0px]"
      )}
      {...{ error, focused }}
      {...props}
    >
      <IonLabel
        position="floating"
        className={clsxm(error && "!text-danger-default")}
      >
        {labelText}
      </IonLabel>
      <IonInput
        disabled={isSubmitting}
        className={clsxm(
          "bg-transparent -mt-2 [&>input]:!pb-0",
          props?.className
        )}
        placeholder={placeholder ? placeholder : label ? label : name}
        {...field}
        {...props}
      />
    </AppFormItem>
  );
};

export default AppStackedInput;
