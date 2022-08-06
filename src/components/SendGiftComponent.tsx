import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

function SendGiftComponent({ onDissmiss }: { onDissmiss: () => void }) {
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
            <IonButton onClick={onDissmiss}>Cancel</IonButton>
          </IonButtons>
          <IonTitle>XX Store Coupon</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="px-4">
          {/* 
        // TODO: Add the SendGiftComponent here.
        */}
          Blank
        </div>
      </IonContent>
    </IonPage>
  );
}
export default SendGiftComponent;
