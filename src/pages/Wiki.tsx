import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonPage,
  IonThumbnail,
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
        {/* 
            // !TODO: Main content goes here
          */}
        <IonItem routerLink={`/wiki/first`} button detail>
          <IonThumbnail slot="start">
            <IonImg src="https://picsum.photos/300/300" />
          </IonThumbnail>
          <IonLabel>
            <h2>Wiki Title 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Wiki;
