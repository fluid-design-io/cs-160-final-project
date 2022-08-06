import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

function RedeemAddPoints({ onDissmiss }: { onDissmiss: () => void }) {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={onDissmiss}>Cancel</IonButton>
          </IonButtons>
          <IonTitle>Add Points</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Add Points</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="p-4">
          {/* 
            // TODO: Add form
            // TODO: Add invite section
        */}
          <p>Add points section</p>
        </div>
      </IonContent>
    </IonPage>
  );
}
export default RedeemAddPoints;
