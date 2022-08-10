import { IonRouterLink } from "@ionic/react";
import { Store } from "../data/stores";
import { Wiki } from "../data/wiki";

function StoreCardItem({
  store = undefined,
  wiki = undefined,
}: {
  store?: Store;
  wiki?: Wiki;
}) {
  return (
    <IonRouterLink
      routerLink={
        store ? `/store/${store.id}` : wiki ? `/wiki/${wiki.id}` : "/home"
      }
    >
      <div
        className={`w-32 flex-shrink-0 h-44 rounded-lg shadow-xl bg-cover bg-center bg-no-repeat flex justify-start items-end p-2 mt-4 relative overflow-hidden hover:scale-95 transition`}
        style={{
          backgroundImage: `url(${store?.images[1] || wiki?.image})`,
          boxShadow: "0px 8px 14px -5px rgba(0, 0, 0, 0.3)",
        }}
      >
        <h1
          className="text-md font-bold text-light-default z-10 whitespace-normal"
          style={{
            textShadow: `0 0 10px rgba(0, 0, 0, 0.5)`,
          }}
        >
          {store?.name || wiki?.name}
        </h1>
        <div className="absolute inset-0 bg-[black] [mask-image:linear-gradient(0deg,rgba(255,255,255,0.35),rgba(255,255,255,0))]" />
      </div>
    </IonRouterLink>
  );
}
export default StoreCardItem;
