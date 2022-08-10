import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonImg,
  IonModal,
  IonPage,
  IonSearchbar,
  IonToolbar,
  useIonRouter,
  useIonViewDidEnter,
  useIonViewWillLeave,
} from "@ionic/react";
import React, { useRef, useState } from "react";

import HomeComponent from "../components/HomeComponent";
import SearchComponent from "../components/SearchComponent";

const Home: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalExpanded, setIsModalExpanded] = useState(false);
  const router = useIonRouter();
  const openPage = (page: string) => {
    router.push(page);
  };
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsModalExpanded(false);
  };
  useIonViewDidEnter(handleModalOpen);
  useIonViewWillLeave(handleModalClose);
  return (
    <IonPage>
      <IonContent fullscreen>
        <div
          style={{
            backgroundImage: "url(/assets/images/map.png)",
          }}
          className="bg-cover bg-center w-full h-full"
        ></div>
      </IonContent>
      <IonModal
        ref={modal}
        trigger="open-modal"
        isOpen={isModalOpen}
        initialBreakpoint={0.25}
        breakpoints={[0.25, 0.5, 1]}
        backdropDismiss={false}
        backdropBreakpoint={0.5}
      >
        <IonHeader>
          <IonToolbar
            style={{
              "--background": "transparent",
              "--border-width": "0px",
            }}
          >
            <div className="flex justify-between items-center">
              <IonSearchbar
                onFocus={() => {
                  setIsModalExpanded(true);
                  modal.current?.setCurrentBreakpoint(1);
                }}
                onIonCancel={() => {
                  setIsModalExpanded(false);
                  modal.current?.setCurrentBreakpoint(0.25);
                }}
                // onBlur={() => setIsModalExpanded(false)}
                showCancelButton={"focus"}
                placeholder="Search"
                className="!pb-0 pl-0"
              />
              {!isModalExpanded && (
                <IonAvatar
                  className="w-8 h-8"
                  onClick={() => openPage("/account")}
                >
                  <IonImg
                    src="https://i.pravatar.cc/300?u=a"
                    className="w-8 h-8"
                  />
                </IonAvatar>
              )}
            </div>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {isModalExpanded ? <SearchComponent /> : <HomeComponent />}
        </IonContent>
      </IonModal>
    </IonPage>
  );
};

export default Home;
