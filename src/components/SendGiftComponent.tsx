import {
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { airplaneOutline, sendOutline, text, textOutline } from "ionicons/icons";

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
          <IonTitle>Generate Store Coupon</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="px-4">
          <img className="mx-auto" src="/assets/icon/giftcard.png" />
        </div>
        <div className="px-4">
          <IonList inset>
            <IonItem>
              <IonLabel>Value</IonLabel>
              <IonInput slot="end" className="text-right" placeholder="Enter the amount"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>Recipient</IonLabel>
              <IonInput slot="end" className="text-right" placeholder="Enter the recipient"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>Message</IonLabel>
              <IonTextarea rows={5} placeholder="Enter an eco-friendly message"></IonTextarea>
            </IonItem>
          </IonList>
        </div>
      </IonContent>
      <IonFooter>
        <IonToolbar className="px-4">
          <IonButton color="primary" expand="block">
            <IonIcon icon={airplaneOutline} />
            &nbsp;&nbsp;Send to text
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
}
export default SendGiftComponent;
