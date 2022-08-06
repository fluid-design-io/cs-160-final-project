import {
  IonAvatar,
  IonContent,
  IonImg,
  IonModal,
  IonPage,
  IonSearchbar,
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
        <div className="bg-primary-tint w-full h-full flex justify-center items-center">
          <p className="text-2xl font-semibold text-[#fff] text-center pb-24">
            Google Maps <br /> (screenshot maybe?)
          </p>
        </div>
        <IonModal
          ref={modal}
          trigger="open-modal"
          isOpen={isModalOpen}
          initialBreakpoint={0.25}
          breakpoints={[0.25, 0.5, 1]}
          backdropDismiss={false}
          backdropBreakpoint={0.5}
        >
          <IonContent>
            <div className="flex justify-between pl-2 pr-4 items-center">
              <IonSearchbar
                onFocus={() => {
                  setIsModalExpanded(true);
                  modal.current?.setCurrentBreakpoint(1);
                }}
                onIonCancel={() => {
                  setIsModalExpanded(false);
                  modal.current?.setCurrentBreakpoint(0.25);
                }}
                showCancelButton={"focus"}
                placeholder="Search"
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
            <div className="px-4">
              {isModalExpanded ? <SearchComponent /> : <HomeComponent />}
            </div>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Home;
