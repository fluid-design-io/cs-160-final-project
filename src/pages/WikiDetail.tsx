import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
} from "@ionic/react";

function WikiDetail({
  match: {
    params = {
      id: "",
    },
  },
}) {
  const id = params?.id || "";
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="home" />
          </IonButtons>
          <IonTitle>{id || "Error"}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{id || "Error"}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <p>This is the detail page for Wiki {id}</p>
      </IonContent>
    </IonPage>
  );
}
export default WikiDetail;
