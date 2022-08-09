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
import { airplaneOutline, sendOutline, storefront, text, textOutline } from "ionicons/icons";
import StoreDetail from "../pages/StoreDetail";

function SendGiftComponent({ onDismiss, storeName }: { onDismiss: () => void, storeName: string }) {
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
          <IonTitle>{storeName} Coupon</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="px-4">
          <img className="mx-auto" src="/assets/icon/eco-giftcard.png" />
        </div>
        <div className="px-4">
          <IonList inset>
            <IonItem>
              <IonLabel>Value</IonLabel>
              <IonInput slot="end" className="text-right" placeholder="Enter the amount ($)"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>Recipient</IonLabel>
              <IonInput slot="end" className="text-right" placeholder="Enter the recipient"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>Message</IonLabel>
              <IonTextarea rows={5} className="text-right pr-2" placeholder="Type in an eco-friendly message"></IonTextarea>
            </IonItem>
          </IonList>
        </div>
      </IonContent>
      <IonFooter>
        <IonToolbar className="px-4">
          <IonButton className="pb-1" color="primary" expand="block" onClick={onDismiss}>
            <IonIcon icon={airplaneOutline} color="light"/>
            <span className="text-[white]">&nbsp;&nbsp;Send to text</span>
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
}
export default SendGiftComponent;
