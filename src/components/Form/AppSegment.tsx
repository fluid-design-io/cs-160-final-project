import { IonSegment, IonSegmentButton } from "@ionic/react";
import { Field, useFormikContext } from "formik";
import { useState } from "react";

import { AppSegmentProps } from "../../interfaces/form";

function AppSegment({
  name,
  segments,
  defaultValue,
  label = undefined,
  onSegmentChange,
  show,
  ...props
}: AppSegmentProps) {
  const { setFieldTouched, handleChange } = useFormikContext();
  const [focused, setFocused] = useState(false);
  return (
    <Field
      slot="end"
      component={AppSegmentComponent}
      onSegmentChange={onSegmentChange}
      onFocus={() => setFocused(true)}
      onBlur={() => {
        setFieldTouched(name);
        setFocused(false);
      }}
      {...{
        name,
        segments,
        label,
        defaultValue,
        show,
        focused,
        handleChange,
        ...props,
      }}
    />
  );
}
const AppSegmentComponent = ({
  label,
  segments,
  defaultValue,
  field,
  form,
  show,
  focused,
  values,
  handleChange,
  onSegmentChange,
  ...props
}) => {
  const isShowing = show && show(field.value, values);
  if (isShowing !== undefined && !isShowing) {
    return null;
  }
  return (
    <IonSegment
      value={field.value || defaultValue}
      onIonChange={(e) => {
        onSegmentChange(e);
        handleChange({
          target: { value: e.detail.value, name: field.name },
        });
      }}
      {...field}
      {...props}
    >
      {segments.map((segment) => (
        <IonSegmentButton
          key={`${segment.label}.${segment.value}`}
          value={`${segment.value}`}
        >
          {segment.label}
        </IonSegmentButton>
      ))}
    </IonSegment>
  );
};
export default AppSegment;
