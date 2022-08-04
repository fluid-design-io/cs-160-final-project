import { IonButton } from "@ionic/react";
import { useFormikContext } from "formik";

function ResetButton({ title, onDismiss, ...props }) {
  const { resetForm } = useFormikContext();
  const handleDismiss = () => {
    resetForm();
    onDismiss();
  };
  return (
    <IonButton
      color="secondary"
      className="font-semibold"
      expand="block"
      title={title}
      onClick={handleDismiss}
      type="submit"
    >
      {title}
    </IonButton>
  );
}

export default ResetButton;
