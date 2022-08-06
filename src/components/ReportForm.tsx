import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

function ReportForm({ onDismiss }: { onDismiss: () => void }) {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar
          style={{
            "--background": "transparent",
            "--border-width": "0px",
          }}
        >
          <IonButtons slot="start">
            <IonButton onClick={onDismiss}>Cancel</IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={onDismiss}>Report</IonButton>
          </IonButtons>
          <IonTitle>Report Store</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* 
            // TODO: Add form
        */}
        A list of fomrs to be filled out by the user.
      </IonContent>
    </IonPage>
  );
}
export default ReportForm;
