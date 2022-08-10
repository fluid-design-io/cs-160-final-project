import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
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
          <IonItem>
            <IonInput placeholder="Enter coupon code" />
          </IonItem>
          <IonButton expand="block" color="secondary">
            Redeem
          </IonButton>
          <div className="text-xs text-medium-default text-center pt-8">----- OR -----</div>
          <div className="w-3/5 max-w-xs p-4 mx-auto py-20">
            <img
              src="/assets/images/200-points.png"
              className="w-full h-full"
              alt=""
            />
          </div>
          <IonButton expand="block" color="primary">
            Invite
          </IonButton>
          <p className="text-xs text-medium-default pt-4">
            For each new member joined and orered thier first drink, you and
            your invited friend will both recieve 200 points. Max of 10 invites.
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
}
export default RedeemAddPoints;
