import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonImg,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonActionSheet,
  useIonModal,
} from "@ionic/react";
import { closeCircle, giftOutline, share } from "ionicons/icons";
import { useRef } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import SendGiftComponent from "../components/SendGiftComponent";

const StoreDetail = ({
  match: {
    params = {
      id: "",
    },
  },
}) => {
  // * This is the id of the store that we are looking at.
  // * We will use this id to get the store information.
  const id = params?.id || "";
  const swiperRef = useRef<any>(null);
  const [showShareSheet, hideShareSheet] = useIonActionSheet();
  const [presentSendGiftModal, hideSendGiftModal] = useIonModal(
    SendGiftComponent,
    {
      onDissmiss: () => hideSendGiftModal(),
    }
  );
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Store {id}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* Image slider */}
        <Swiper
          modules={[Pagination]}
          pagination={true}
          className="w-full h-[75vw] relative -mt-14 [&_.swiper-pagination-bullet]:!-mb-2 [&_.swiper-pagination-bullet]:opacity-50 [&_.swiper-pagination-bullet-active]:!bg-medium-contrast [&_.swiper-pagination-bullet-active]:!opacity-75"
          onInit={(swiper) => (swiperRef.current = swiper)}
          preloadImages
          loop
        >
          {[1, 2, 3].map((_, index) => (
            <SwiperSlide key={index}>
              <IonImg
                src={`https://picsum.photos/seed/${id}.${index}/600`}
                className="object-cover aspect-[4/3]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <IonHeader collapse="condense" className="">
          <IonToolbar>
            <IonTitle size="large" className="pl-4 pb-0">
              Store {id}
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* 
          // * This is the main content of the page. remove the `h-[200vh]` className.
          // TODO: Add the content of the page.
         */}
        <div className="px-4 h-[200vh]">
          <span>This is the Store {id} detail</span>
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
                        breakpoints: [0, 0.75, 1],
                        initialBreakpoint: 0.75,
                        handle: false,
                      }),
                  },
                  {
                    text: "Share",
                    icon: share,
                  },
                  {
                    text: "Cancel",
                    icon: closeCircle,
                    role: "calcel",
                  },
                ],
              })
            }
          >
            Show Share Sheet
          </IonButton>
        </div>
      </IonContent>
      <IonFooter>
        <IonToolbar className="px-4">
          <div className="flex justify-between gap-4 font-semibold py-1">
            <span>3 items • 20min</span>
            <span>$20.00</span>
          </div>
          <IonButton color="primary" expand="block" routerLink="/checkout">
            Checkout
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};
export default StoreDetail;
