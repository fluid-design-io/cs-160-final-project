import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonModal,
    IonNote,
    IonThumbnail,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import { Menu } from '../data/menus';
import './MenuListItem.css';
import { OverlayEventDetail } from '@ionic/core/components';
import { useRef, useState } from 'react';

interface MenuListItemProps {
    menu: Menu;
}

const MenuListItem: React.FC<MenuListItemProps> = ({ menu }) => {
    const modal = useRef<HTMLIonModalElement>(null);
    const input = useRef<HTMLIonInputElement>(null);

    const [isOpen, setIsOpen] = useState(false)

    const [message, setMessage] = useState(
        'This modal example uses triggers to automatically open a modal when the button is clicked.'
    );

    function confirm() {
        modal.current?.dismiss(input.current?.value, 'confirm');
    }

    function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
        if (ev.detail.role === 'confirm') {
            setMessage(`Hello, ${ev.detail.data}!`);
        }
    }
    return (
        <>
        <IonModal isOpen={isOpen} ref={modal}>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonButton onClick={() => modal.current?.dismiss()} ></IonButton>
                        </IonButtons>
                        <IonTitle>Welcome</IonTitle>
                        <IonButtons slot="end">
                            <IonButton strong={true} onClick={() => setIsOpen(false)}>
                                Confirm
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonItem>
                        <IonLabel position="stacked">Enter your name</IonLabel>
                        <IonInput type="text" placeholder="Your name" />
                    </IonItem>
                </IonContent>
            </IonModal>
        <IonItem onClick={() => setIsOpen(true)}>
            <div slot="start" className=""></div>
            <IonThumbnail slot="start" className="object-cover">
                <img src={menu.image} className="w-full h-full !rounded-lg" />
            </IonThumbnail>
            <IonLabel className="ion-text-wrap">
                <h2>
                    {menu.menuName}
                </h2>
                <h3>{menu.menuDescription}</h3>
                <div>
                    <div className="flex items-center justify-between px-2">
                        <label className="flex h-5 w-5 cursor-pointer flex-col items-center justify-center rounded-full bg-primary-default uppercase tracking-wide">
                            <span className="text-base text-[white] dark:text-[black] leading-normal">S</span>
                        </label>
                        <label className="flex h-5 w-5 cursor-pointer flex-col items-center justify-center rounded-full bg-primary-default uppercase tracking-wide">
                            <span className="text-base text-[white] dark:text-[black] leading-normal">M</span>
                        </label>
                        <label className="flex h-5 w-5 cursor-pointer flex-col items-center justify-center rounded-full bg-primary-default uppercase tracking-wide">
                            <span className="text-base text-[white] dark:text-[black] leading-normal">L</span>
                        </label>
                    </div>
                </div>
                <h3><span className="price"><IonNote>{menu.price}</IonNote></span></h3>
            </IonLabel>
        </IonItem>
        </>
    );
};

export default MenuListItem;
