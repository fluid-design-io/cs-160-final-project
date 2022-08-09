import {
    IonButton,
    IonButtons,
    IonCheckbox,
    IonContent,
    IonFooter,
    IonHeader,
    IonIcon,
    IonImg,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonInput,
    IonItem,
    IonItemDivider,
    IonLabel,
    IonList,
    IonModal,
    IonNote,
    IonPage,
    IonTextarea,
    IonThumbnail,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import { Menu } from '../data/menus';
import { useEffect, useRef, useState } from 'react';
import { addCircle, addCircleOutline, addOutline, bagAddOutline, bagRemoveOutline, cart, cartOutline, removeCircleOutline, trash } from 'ionicons/icons';
import { setNestedObjectValues } from 'formik';

interface MenuListItemProps {
    menu: Menu;
    pageRef: any;
}

const sizeList = [
    { val: 'Small', isChecked: false },
    { val: 'Medium', isChecked: false },
    { val: 'Large', isChecked: false },
]

const addOnsList = [
    { val: 'Tapioca pearls', isChecked: false, price: "$ 0.5" },
    { val: 'Lychee jelly', isChecked: false, price: "$ 0.5" },
    { val: 'Mango jelly', isChecked: false, price: "$ 0.5" },
    { val: 'Milk foam', isChecked: false, price: "$ 1.0" },
];

const substitutesList = [
    { val: 'Organic milk', isChecked: false, price: "$ 0.5" },
    { val: 'Oat milk', isChecked: false, price: "$ 1.0" },
    { val: 'Lactose-free milk', isChecked: false, price: "$ 0.5" },
    { val: 'Fat-free milk', isChecked: false, price: "$ 0.5" },
    { val: 'Caffeine-free', isChecked: false },
]

const MenuListItem: React.FC<MenuListItemProps> = ({ menu, pageRef }) => {
    const modal = useRef<HTMLIonModalElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    const [count, setCounter] = useState(1);

    return (
        <>
            <IonItem onClick={() => setIsOpen(true)}>
                <IonThumbnail slot="start" className="object-cover">
                    <img src={menu.image} className="w-full h-full !rounded-lg" />
                </IonThumbnail>
                <IonLabel className="ion-text-wrap">
                    <h2>
                        {menu.menuName}
                    </h2>
                    <p>{menu.menuDescription}</p>
                    <div>
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col justify-center items-center">
                                <label className="flex h-5 w-5 cursor-pointer flex-col items-center justify-center rounded-full bg-primary-tint uppercase tracking-wide">
                                    <span className="text-base text-[white] dark:text-[black] leading-normal">S</span>
                                </label>
                                <span className="price">{menu.price.small}</span>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <label className="flex h-5 w-5 cursor-pointer flex-col items-center justify-center rounded-full bg-primary-default uppercase tracking-wide">
                                    <span className="text-base text-[white] dark:text-[black] leading-normal">M</span>
                                </label>
                                <span className="price">{menu.price.medium}</span>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <label className="flex h-5 w-5 cursor-pointer flex-col items-center justify-center rounded-full bg-primary-shade uppercase tracking-wide">
                                    <span className="text-base text-[white] dark:text-[black] leading-normal">L</span>
                                </label>
                                <span className="price">{menu.price.large}</span>
                            </div>
                        </div>
                    </div>
                </IonLabel>
            </IonItem>
            <IonModal isOpen={isOpen} ref={modal} scroll-y="true" presentingElement={pageRef} canDismiss>
                <IonPage>
                    <IonHeader>
                        <IonToolbar style={{
                        }}>
                            <IonTitle>
                                {menu.menuName}
                            </IonTitle>
                            <IonButtons slot="start">
                                <IonButton strong={true} onClick={() => setIsOpen(false)}>
                                    Cancel
                                </IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent fullscreen>
                        <img className="object-cover object-center -mt-14 w-full h-48" src={menu.image}>
                        </img>
                        <IonHeader collapse="condense" className="">
                            <IonToolbar>
                                <IonTitle size="large" className="px-2 pb-0">
                                    {menu.menuName}
                                </IonTitle>
                            </IonToolbar>
                        </IonHeader>
                        <div className="px-4">
                            <span>{menu.menuDescription}</span>
                        </div>
                        <IonList inset>
                            <IonItemDivider>Size</IonItemDivider>
                            <div className="">
                                {sizeList.map(({ val, isChecked }, i) => (
                                    <IonItem key={i}>
                                        <IonLabel>
                                            <div className="flex justify-between">
                                                <span>{val}</span>
                                                <span className="text-end" slot="end">
                                                    {menu.price[val.toLowerCase()]}
                                                </span>
                                            </div>
                                        </IonLabel>
                                        <IonCheckbox slot="start" value={val} checked={isChecked} />
                                    </IonItem>
                                ))}
                            </div>
                        </IonList>
                        <IonList inset>
                            <IonItemDivider>Add-Ons</IonItemDivider>
                            <div className="">
                                {addOnsList.map(({ val, isChecked, price }, i) => (
                                    <IonItem key={i}>
                                        <IonLabel>
                                            <div className="flex justify-between">
                                                <span>{val}</span>
                                                <span className="text-end" slot="end">{price}</span>
                                            </div>
                                        </IonLabel>
                                        <IonCheckbox slot="start" value={val} checked={isChecked} />
                                    </IonItem>
                                ))}
                            </div>
                        </IonList>
                        <IonList inset>
                            <IonItemDivider>Substitutes</IonItemDivider>
                            <div className="">
                                {substitutesList.map(({ val, isChecked, price }, i) => (
                                    <IonItem key={i}>
                                        <IonLabel>
                                            <div className="flex justify-between">
                                                <span>{val}</span>
                                                <span className="text-end" slot="end">{price}</span>
                                            </div>
                                        </IonLabel>
                                        <IonCheckbox slot="start" value={val} checked={isChecked} />
                                    </IonItem>
                                ))}
                            </div>
                        </IonList>
                        <IonList inset>
                            <IonItemDivider>Requests</IonItemDivider>
                            <div className="">
                                <IonItem>
                                    <IonTextarea rows={3} placeholder="Enter any additional requests"></IonTextarea>
                                </IonItem>
                            </div>
                        </IonList>
                    </IonContent>
                    <IonFooter>
                        <IonToolbar className="px-4">
                            <IonButton className="pb-1" color="primary" expand="block" onClick={() => setIsOpen(false)}>
                                <IonIcon icon={cartOutline} color="light" />
                                &nbsp;&nbsp;<span className="text-[white]">Add to order</span>
                            </IonButton>
                        </IonToolbar>
                    </IonFooter>
                </IonPage>
            </IonModal>
        </>
    );
};

export default MenuListItem;
