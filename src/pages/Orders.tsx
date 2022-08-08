import {
  IonBackButton,
  IonBadge,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonModal,
} from "@ionic/react";
import { medal } from "ionicons/icons";
import { OrderList } from "../components/OrderList";

import ReportForm from "../components/ReportForm";

const orders = [
    {
        title: "Feng Cha Teahouse",
        date: "Sunday, April 5th",
        amount: "7.5",
    },
    {
        title: "Starbucks",
        date: "Monday, March 30th",
        amount:"12.5", 
    },
    {
        title: "Yi Fang Taiwan Fruit Tea",
        date: "Tuesday, March 24th",
        amount: "16.8", 
    },
    {
        title: "Boba Bear & Mochi",
        date: "Saturday, March 7th",
        amount: "17.5", 
    },
    {
        title: "Ti Bear",
        date: "Saturday, Feburary 14th",
        amount: "12.5",
    },

]

const Orders: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="home" />
          </IonButtons>
          <IonTitle>Orders</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Orders</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="px-4">
          {/* 
            // !TODO: Main content goes here
          */}
                  {/*Top header portion cotainer the contribution section.*/}
                  <IonCard>
                      <IonCardHeader>
                          <IonCardSubtitle>Your total contribution
                              <span>     </span>
                              <IonIcon icon={medal} />
                          </IonCardSubtitle>                        
                      </IonCardHeader>

                      <IonCardContent>
                          300 Points
                      </IonCardContent>
                  </IonCard>

                  {/*Uses the array above to create the list of past orders*/ }
                  {orders.map((order, index) => (
                      <OrderList
                          title={order.title}
                          date={order.date}
                          amount={order.amount }
                      />
                  ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Orders;
