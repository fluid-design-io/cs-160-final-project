import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonFooter,
  IonButton,
} from "@ionic/react";

function Checkout() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="home" />
          </IonButtons>
          <IonTitle>Checkout</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Checkout</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="px-4">
          {/* 
            // !TODO: Main content goes here
          */}
          This is the Checkout page.
        </div>
      </IonContent>
      <IonFooter>
        <IonToolbar className="px-4">
          <IonButton
            color="primary"
            expand="block"
            routerLink="/orders"
            routerDirection="back"
            routerOptions={{
              unmount: true,
            }}
          >
            Confirm Order
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
}
export default Checkout;
