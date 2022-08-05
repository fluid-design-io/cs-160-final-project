import {
  IonAvatar,
  IonChip,
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonModal,
  IonPage,
  IonSearchbar,
  useIonRouter,
  useIonViewWillEnter,
  useIonViewWillLeave,
} from "@ionic/react";
import { heart } from "ionicons/icons";
import React, { useRef, useState } from "react";

const Home: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useIonRouter();
  const openPage = async (page: string) => {
    router.push(page);
  };
  useIonViewWillEnter(() => setIsModalOpen(true));
  useIonViewWillLeave(() => setIsModalOpen(false));
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="bg-primary-tint w-full h-full flex justify-center items-center">
          <p className="text-2xl font-semibold text-[#fff]">Google Map</p>
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
          <IonContent className="ion-padding">
            <IonSearchbar
              onClick={() => modal.current?.setCurrentBreakpoint(1)}
              placeholder="Search"
            />
            <IonList className="whitespace-nowrap overscroll-x-srcoll overflow-y-hidden flex gap-2 px-4">
              <IonChip
                className="flex-shrink-0 !rounded-md"
                onClick={async () => await openPage("/tab1")}
              >
                <IonIcon icon={heart} color="dark" />
                <IonLabel>Orders</IonLabel>
              </IonChip>
              <IonChip
                className="flex-shrink-0 !rounded-md"
                onClick={async () => await openPage("/tab2")}
              >
                <IonIcon icon={heart} color="dark" />
                <IonLabel>Rewards</IonLabel>
              </IonChip>
              <IonChip
                className="flex-shrink-0 !rounded-md"
                onClick={async () => await openPage("/tab3")}
              >
                <IonIcon icon={heart} color="dark" />
                <IonLabel>Wiki</IonLabel>
              </IonChip>
              <IonChip
                className="flex-shrink-0 !rounded-md"
                onClick={async () => await openPage("/tab3")}
              >
                <IonIcon icon={heart} color="dark" />
                <IonLabel>Something Else</IonLabel>
              </IonChip>
            </IonList>
            <IonList>
              <IonListHeader>
                <IonLabel className="mt-2">Recent</IonLabel>
              </IonListHeader>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://i.pravatar.cc/300?u=b" />
                </IonAvatar>
                <IonLabel>
                  <h2>Connor Smith</h2>
                  <p>Sales Rep</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://i.pravatar.cc/300?u=a" />
                </IonAvatar>
                <IonLabel>
                  <h2>Daniel Smith</h2>
                  <p>Product Designer</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://i.pravatar.cc/300?u=d" />
                </IonAvatar>
                <IonLabel>
                  <h2>Greg Smith</h2>
                  <p>Director of Operations</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://i.pravatar.cc/300?u=e" />
                </IonAvatar>
                <IonLabel>
                  <h2>Zoey Smith</h2>
                  <p>CEO</p>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Home;
