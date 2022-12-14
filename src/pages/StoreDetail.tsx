import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonChip,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonImg,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonActionSheet,
  useIonModal,
} from "@ionic/react";
import {
  cafe,
  cartOutline,
  closeCircleOutline,
  flame,
  giftOutline,
  heart,
  heartOutline,
  leaf,
  paperPlane,
  shareOutline,
  shareSocialOutline,
  star,
} from "ionicons/icons";
import { useRef, useState } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import MenuListItem from "../components/MenuListItem";
import SendGiftComponent from "../components/SendGiftComponent";
import { Menu, menus } from "../data/menus";
import { stores } from "../data/stores";

const StoreDetail = ({
  match: {
    params = {
      id: 1,
    },
  },
}) => {
  // * This is the id of the store that we are looking at.
  // * We will use this id to get the store information.
  const id = params?.id || "";
  const store = stores.find((s) => s.id.toString() === id.toString());
  console.log(store);
  const [isLiked, setIsLiked] = useState(false);
  const swiperRef = useRef<any>(null);
  const [storeMenus, setMenus] = useState<Menu[]>(menus);
  const pageRef = useRef<any>(null);
  const [showShareSheet, hideShareSheet] = useIonActionSheet();
  const [presentSendGiftModal, hideSendGiftModal] = useIonModal(
    SendGiftComponent,
    {
      onDismiss: () => hideSendGiftModal(),
      storeName: store.name,
    }
  );
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Share",
          text: `Check out this store on ${store.name}`,
          url: "www.example.com",
        })
        .then(() => {
          console.log("Successfully shared");
        })
        .catch((error) => {
          console.error("Something went wrong", error);
        });
    } else {
      // console.log("not shared");
    }
  };
  return (
    <IonPage ref={pageRef}>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonButton>
              <IonBackButton defaultHref="/home" className="pt-2 pr-2" />
            </IonButton>
          </IonButtons>
          <IonTitle>{store.name}</IonTitle>
          <IonButtons slot="end" className="pt-2 pr-2">
            <IonButton color="danger" onClick={() => setIsLiked(!isLiked)}>
              <IonIcon slot="icon-only" icon={isLiked ? heart : heartOutline} />
            </IonButton>
            <IonButton
              onClick={() =>
                showShareSheet({
                  buttons: [
                    {
                      text: "Send Gift",
                      icon: giftOutline,
                      handler: () =>
                        presentSendGiftModal({
                          canDismiss: true,
                          breakpoints: [0, 0.5, 1],
                          initialBreakpoint: 1,
                          handle: false,
                        }),
                    },
                    {
                      text: "Share",
                      icon: shareOutline,
                      handler: () => handleShare(),
                    },
                    {
                      text: "Cancel",
                      icon: closeCircleOutline,
                      role: "cancel",
                    },
                  ],
                })
              }
            >
              <IonIcon slot="icon-only" icon={shareSocialOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="max-w-lg mx-auto">
          <Swiper
            modules={[Pagination]}
            pagination={true}
            className="w-full h-[75vw] relative -mt-14 [&_.swiper-pagination-bullet]:!-mb-2 [&_.swiper-pagination-bullet]:opacity-50 [&_.swiper-pagination-bullet-active]:!bg-medium-contrast [&_.swiper-pagination-bullet-active]:!opacity-75"
            onInit={(swiper) => (swiperRef.current = swiper)}
            preloadImages
            loop
          >
            {store.images.map((image, index) => (
              <SwiperSlide key={index}>
                <IonImg src={image} className="object-cover aspect-[4/3]" />
              </SwiperSlide>
            ))}
          </Swiper>
          <IonHeader collapse="condense" className="">
            <IonToolbar>
              <IonTitle size="large" className="pl-4 pb-0">
                {store.name}
              </IonTitle>
            </IonToolbar>
          </IonHeader>
          <div className="px-4">
            <span className="pb-0">
              <IonIcon slot="icon-only" icon={star} />
            </span>
            &nbsp;{store.ratings}
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{store.description}</span>
          </div>
          <div className="pl-2">
            {store.filter.popular && (
              <IonChip className="flex-shrink-0" color="purple">
                <IonIcon icon={flame} />
                <IonLabel>Popular</IonLabel>
              </IonChip>
            )}
            {store.filter.organic && (
              <IonChip className="flex-shrink-0" color="primary">
                <IonIcon icon={leaf} />
                <IonLabel>Organic</IonLabel>
              </IonChip>
            )}
            {store.filter.biodegradable && (
              <IonChip className="flex-shrink-0" color="primary">
                <IonIcon icon={leaf} />
                <IonLabel>Bio-degradable</IonLabel>
              </IonChip>
            )}
            {store.filter.compostable && (
              <IonChip className="flex-shrink-0" color="primary">
                <IonIcon icon={paperPlane} />
                <IonLabel>Compostable</IonLabel>
              </IonChip>
            )}
            {store.filter.recyclable && (
              <IonChip className="flex-shrink-0" color="primary">
                <IonIcon icon={leaf} />
                <IonLabel>Recyclable</IonLabel>
              </IonChip>
            )}
            {store.filter.bringYourOwn && (
              <IonChip className="flex-shrink-0" color="warning">
                <IonIcon icon={cafe} />
                <IonLabel>Bring-your-own</IonLabel>
              </IonChip>
            )}
          </div>
          <IonList>
            <IonListHeader>Menu</IonListHeader>
            {storeMenus.map((m) => (
              <MenuListItem menu={m} key={m.id} pageRef={pageRef.current} />
            ))}
          </IonList>
        </div>
      </IonContent>
      <IonFooter>
        <IonToolbar className="px-4">
          <IonButton
            className="pt-1 pb-1"
            color="primary"
            expand="block"
            routerLink="/checkout"
          >
            <IonIcon icon={cartOutline} color="light" />
            &nbsp;&nbsp;<span className="text-[white]">Checkout</span>
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};
export default StoreDetail;
