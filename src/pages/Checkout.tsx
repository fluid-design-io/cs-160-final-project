import Cart from "../components/Cart";
import {cartOutline } from 'ionicons/icons';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
} from "@ionic/react";

function Checkout() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="home" />
          </IonButtons>
          <IonTitle >
            <div className = 'flex items-center justify-center gap-2'>
            Checkout
            <IonIcon size='large' icon={cartOutline} />
            </div>
            
            </IonTitle>
          
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        
          <Cart />
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
