//@source https://v2.tailwindcss.com/docs
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
} from "@ionic/react";
import { wikis } from "../data/wiki";

function WikiDetail({
  match: {
    params = {
      id: "",
    },
  },
}) {
  const id = params?.id || "";
  const wiki = wikis.find((s) => s.id.toString() === id.toString());
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="home" />
          </IonButtons>
          <IonTitle>{wiki.name || "Error"}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{id || "Error"}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="p-4">
          <h5 className="text-lg font-semibold">What does {wiki.name} mean?</h5>
          <p className="py-4">{wiki.tagline}</p>

          <p className="text-lg font-semibold">
            What are {wiki.name} products made of?
          </p>
          <p className="py-4">{wiki.compound}</p>

          <p className="text-lg font-semibold">
            How long do {wiki.name} products take to break down?
          </p>
          <p className="py-4">{wiki.breakdowntime}</p>

          <p className="text-lg font-semibold">
            What do {wiki.name} products break down into?
          </p>
          <p className="py-4">{wiki.intowhat}</p>

          <p className="text-lg font-semibold">
            What bin should you dispose of {wiki.name} products?
          </p>
          <p className="py-4">{wiki.where}</p>

          <p className="text-lg font-semibold">
            How does the decomposition process for {wiki.name} products work?
          </p>
          <p className="py-4">{wiki.how}</p>

          <p className="text-lg font-semibold">
            What shouldn't I do when using {wiki.name} products?
          </p>
          <p className="py-4">{wiki.nottodo}</p>

          <p className="text-lg font-semibold">
            How do I know if a product/material is {wiki.name}?
          </p>
          <p className="py-4">{wiki.label}</p>
        </div>
      </IonContent>
    </IonPage>
  );
}
export default WikiDetail;
