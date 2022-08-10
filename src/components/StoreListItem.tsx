import {
  IonChip,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonThumbnail,
} from "@ionic/react";
import { leaf } from "ionicons/icons";

import { Store } from "../data/stores";

function StoreListItem({ store }: { store: Store }) {
  return (
    <IonItem routerLink={`/store/${store.id}`} detail={false} button>
      <IonThumbnail slot="start">
        <IonImg src={store.images[0]} className="rounded-md" />
      </IonThumbnail>
      <IonLabel>
        <h2 className="!font-medium !text-base flex items-center gap-2">
          <span>{store.name}</span>
          <IonIcon icon={leaf} color="success" />
        </h2>
        <p className="!text-xs !-mt-1">{store.description}</p>
        <div className="flex whitespace-nowrap max-w-full overflow-x-auto -ml-1">
          {Object.keys(store.filter).map(
            (key) =>
              store.filter[key] && (
                <IonChip
                  key={key}
                  className="flex-shrink-0 !text-xs rounded-md py-0 px-2 h-5 capitalize mt-0"
                >
                  {key}
                </IonChip>
              )
          )}
        </div>
      </IonLabel>
    </IonItem>
  );
}
export default StoreListItem;
