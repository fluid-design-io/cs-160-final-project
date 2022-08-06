import { IonButton } from "@ionic/react";
import { useFormikContext } from "formik";

import clsxm from "../../lib/clsxm";

// conver this function into a react forward ref
function SubmitButton({ title, onDismiss = null, ...props }) {
  const { handleSubmit, isValid, errors } = useFormikContext();
  return (
    <IonButton
      className={clsxm("font-semibold", props?.className)}
      expand="block"
      title={title}
      disabled={!isValid}
      onClick={() => {
        handleSubmit();
        onDismiss && onDismiss();
      }}
      type="submit"
    >
      {title}
    </IonButton>
  );
}

export default SubmitButton;
