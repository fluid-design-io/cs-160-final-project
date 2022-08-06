import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";


const Wiki: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="home" />
          </IonButtons>
          <IonTitle>Wiki</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Wiki</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="px-4">
          {/* 
            // !TODO: Main content goes here
          */}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Wiki;
