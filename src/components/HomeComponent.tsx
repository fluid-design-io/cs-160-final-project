import {
  IonChip,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonThumbnail,
  useIonRouter,
} from "@ionic/react";
import { bookOutline, person, trophyOutline } from "ionicons/icons";

function HomeComponent() {
  const router = useIonRouter();
  const openPage = (page: string) => {
    router.push(page);
  };
  return (
    <div>
      <IonList className="whitespace-nowrap overscroll-x-srcoll overflow-y-hidden flex gap-2">
        <IonChip
          className="flex-shrink-0 !rounded-md"
          onClick={() => openPage("/orders")}
          color="primary"
        >
          <IonIcon icon={person} />
          <IonLabel>Orders</IonLabel>
        </IonChip>
        <IonChip
          className="flex-shrink-0 !rounded-md"
          color="purple"
          onClick={() => openPage("/rewards")}
        >
          <IonIcon icon={trophyOutline} />
          <IonLabel>Rewards</IonLabel>
        </IonChip>
        <IonChip
          className="flex-shrink-0 !rounded-md"
          color={"information"}
          onClick={() => openPage("/wiki")}
        >
          <IonIcon icon={bookOutline} />
          <IonLabel>Wiki</IonLabel>
        </IonChip>
      </IonList>
      <IonList>
        <IonListHeader>
          <IonLabel className="mt-2">Recent</IonLabel>
        </IonListHeader>
        {/* 
            // !TODO: Replace with component and from data
          */}
        <IonItem routerLink="/store/1">
          <IonThumbnail slot="start">
            <IonImg src="https://picsum.photos/200" />
          </IonThumbnail>
          <IonLabel>
            <h2>Boba Store 1</h2>
            <p>Description</p>
          </IonLabel>
        </IonItem>
        <IonItem routerLink="/store/2">
          <IonThumbnail slot="start">
            <IonImg src="https://picsum.photos/seed/b/200" />
          </IonThumbnail>
          <IonLabel>
            <h2>Boba Store 2</h2>
            <p>Description</p>
          </IonLabel>
        </IonItem>
      </IonList>
    </div>
  );
}
export default HomeComponent;
