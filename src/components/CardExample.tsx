import {
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
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonModal,
} from "@ionic/react";
import { pin, walk, warning, wifi, wine } from "ionicons/icons";
import React from "react";

const ModalExample = ({
  onDismiss,
}: {
  onDismiss: (data?: string | null | undefined | number, role?: string) => void;
}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton color="medium" onClick={() => onDismiss(null, "cancel")}>
              Cancel
            </IonButton>
          </IonButtons>
          <IonTitle>Welcome</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => onDismiss()}>Confirm</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <h1>Hi</h1>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export const CardExamples: React.FC = () => {
  const [openModal, closeModal] = useIonModal(ModalExample, {
    onDismiss: () => closeModal(),
  });
  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          <IonCardTitle>Card Title</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit
          clean.
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonItem>
          <IonIcon icon={pin} slot="start" />
          <IonLabel>ion-item in a card, icon left, button right</IonLabel>
          <IonButton
            fill="outline"
            slot="end"
            onClick={() => openModal({ canDismiss: true })}
          >
            Open Modal
          </IonButton>
        </IonItem>

        <IonCardContent>
          This is content, without any paragraph or header tags, within an
          ion-cardContent element.
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonItem href="#">
          <IonIcon icon={wifi} slot="start" />
          <IonLabel>Card Link Item 1</IonLabel>
        </IonItem>

        <IonItem href="#">
          <IonIcon icon={wine} slot="start" />
          <IonLabel>Card Link Item 2</IonLabel>
        </IonItem>

        <IonItem className="ion-activated">
          <IonIcon icon={warning} slot="start" />
          <IonLabel>Card Button Item 1 activated</IonLabel>
        </IonItem>

        <IonItem>
          <IonIcon icon={walk} slot="start" />
          <IonLabel>Card Button Item 2</IonLabel>
        </IonItem>
      </IonCard>
    </>
  );
};
