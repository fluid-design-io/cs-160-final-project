import { IonButton } from "@ionic/react";
import { useFormikContext } from "formik";
import React, { Ref, useEffect } from "react";
import clsxm from "../../lib/clsxm";

export const SubmitButtonRef = React.forwardRef(
  (
    props: {
      title?: string;
      onDismiss?: () => void;
      [x: string]: any;
    },
    ref: Ref<HTMLIonButtonElement>
  ) => {
    const { handleSubmit, isValid, isSubmitting } = useFormikContext();
    const { title, onDismiss = null } = props;
    return (
      <IonButton
        ref={ref}
        className={clsxm(
          "font-semibold",
          !title && "h-0 w-0 overflow-hidden -z-50 invisible",
          props?.className
        )}
        expand="block"
        title={title}
        disabled={!isValid || isSubmitting}
        onClick={() => {
          handleSubmit();
          onDismiss && onDismiss();
        }}
        type="submit"
        {...props}
      >
        {title}
      </IonButton>
    );
  }
);

export default SubmitButtonRef;
