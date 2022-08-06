import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
  useIonModal,
} from "@ionic/react";
import { giftOutline } from "ionicons/icons";
import { useRef, useState } from "react";

import RedeemAddPoints from "../components/RedeemAddPoints";

const Rewards: React.FC = () => {
  const pageRef = useRef<any>(null);
  const [acitveSection, setAcitveSection] = useState("redeem");
  const [presentRedeemModal, hideRedeemModal] = useIonModal(RedeemAddPoints, {
    onDissmiss: () => hideRedeemModal(),
  });
  return (
    <IonPage ref={pageRef}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="home" />
          </IonButtons>
          <IonTitle>Rewards</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSegment
            onIonChange={(e) => setAcitveSection(e.detail.value)}
            defaultValue={acitveSection}
            value={acitveSection}
          >
            <IonSegmentButton value="redeem">
              <IonLabel>Redeem</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="rewards">
              <IonLabel>My Rewards</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* 
          // !TODO: Add two components named RedeemComponent and MyRewardsComponent
          // !TODO: Then import these componets to replace the text below
        */}
        {acitveSection === "redeem" ? (
          <p>Redeem setion</p>
        ) : (
          <p>Rewards section</p>
        )}
        <div className="h-[200vh]" />
        <IonFab
          vertical="bottom"
          horizontal="end"
          slot="fixed"
          onClick={() =>
            presentRedeemModal({
              canDismiss: true,
              presentingElement: pageRef.current,
            })
          }
        >
          <IonFabButton>
            <IonIcon icon={giftOutline} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Rewards;
