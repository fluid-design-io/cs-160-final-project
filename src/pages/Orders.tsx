import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonModal,
} from "@ionic/react";

import { CardExamples } from "../components/CardExample";
import ReportForm from "../components/ReportForm";

const Orders: React.FC = () => {
  const [presentReportModal, hideReportModal] = useIonModal(ReportForm, {
    onDismiss: () => hideReportModal(),
  });
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
          <IonButton
            color="primary"
            onClick={() =>
              presentReportModal({
                canDismiss: true,
                breakpoints: [0, 0.75, 1],
                initialBreakpoint: 0.75,
              })
            }
          >
            Report function
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Orders;
