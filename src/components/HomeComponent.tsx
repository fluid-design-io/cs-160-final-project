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
import React from "react";
import { stores } from "../data/stores";
import { wikis } from "../data/wiki";
import StoreCardItem from "./StoreCardItem";
import StoreListItem from "./StoreListItem";

function HomeComponent() {
  const router = useIonRouter();
  const openPage = (page: string) => {
    router.push(page);
  };
  return (
    <React.Fragment>
      <div className="flex gap-2 px-3">
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
      </div>
      <IonList className="pb-8">
        <IonListHeader>Recent</IonListHeader>
        {stores.map((store) => (
          <StoreListItem key={`recent.${store.id}`} store={store} />
        ))}
        <IonListHeader>Featured</IonListHeader>
        <div className="px-4 flex gap-4 whitespace-nowrap overflow-x-auto max-w-full overflow-y-visible pb-4">
          {stores.map(
            (store) =>
              store.filter.popular && (
                <StoreCardItem key={`featured.${store.id}`} store={store} />
              )
          )}
        </div>
        <IonListHeader>Wiki</IonListHeader>
        <div className="px-4 flex gap-4 whitespace-nowrap overflow-x-auto max-w-full overflow-y-visible pb-4">
          {wikis.map((wiki) => (
            <StoreCardItem key={`wiki.${wiki.id}`} wiki={wiki} />
          ))}
        </div>
      </IonList>
    </React.Fragment>
  );
}
export default HomeComponent;
