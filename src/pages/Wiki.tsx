import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { wikis } from "../data/wiki";

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
        
        <IonList>{
          wikis.map(wiki=>(
            <IonItem className="my-2.5" routerLink={`/wiki/${wiki.id}`} button detail key={wiki.id}>
          <IonThumbnail slot="start">
            <IonImg src= {wiki.icon} />
          </IonThumbnail>
          <IonLabel>
            <h2>{wiki.name}</h2>
            <p>{wiki.tagline}</p>
          </IonLabel>
        </IonItem>
          ))
        }</IonList>
      </IonContent>
    </IonPage>
  );
};

export default Wiki;
