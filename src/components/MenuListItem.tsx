import {
    IonButton,
    IonButtons,
    IonCheckbox,
    IonContent,
    IonFooter,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonItemDivider,
    IonLabel,
    IonList,
    IonModal,
    IonNote,
    IonTextarea,
    IonThumbnail,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import { Menu } from '../data/menus';

import { useRef, useState } from 'react';
import { addCircle, addCircleOutline, addOutline, cartOutline } from 'ionicons/icons';

interface MenuListItemProps {
    menu: Menu;
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

const MenuListItem: React.FC<MenuListItemProps> = ({ menu }) => {
    const modal = useRef<HTMLIonModalElement>(null);
    const [isOpen, setIsOpen] = useState(false)
    const [checked, setChecked] = useState(false);

    return (
        <>
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
                        <div className="flex items-center justify-between px-5">
                            <label className="flex h-5 w-5 cursor-pointer flex-col items-center justify-center rounded-full bg-primary-tint uppercase tracking-wide">
                                <span className="text-base text-[white] dark:text-[black] leading-normal">S</span>
                            </label>
                            <label className="flex h-5 w-5 cursor-pointer flex-col items-center justify-center rounded-full bg-primary-default uppercase tracking-wide">
                                <span className="text-base text-[white] dark:text-[black] leading-normal">M</span>
                            </label>
                            <label className="flex h-5 w-5 cursor-pointer flex-col items-center justify-center rounded-full bg-primary-shade uppercase tracking-wide">
                                <span className="text-base text-[white] dark:text-[black] leading-normal">L</span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <h3><span className="price pl-2"><IonNote>{menu.price.small}</IonNote></span></h3>
                            <h3><span className="price"><IonNote>{menu.price.medium}</IonNote></span></h3>
                            <h3><span className="price pr-3"><IonNote>{menu.price.large}</IonNote></span></h3>
                        </div>
                    </div>
                </IonLabel>
            </IonItem>
            <IonModal isOpen={isOpen} ref={modal}>
                <IonHeader collapse="condense">
                    <div>
                        <IonButtons slot="end">
                            <IonButton strong={true} onClick={() => setIsOpen(false)}>
                                Confirm
                            </IonButton>
                        </IonButtons>
                        <IonButtons>
                            <img src={menu.image}></img>
                        </IonButtons>
                    </div>
                </IonHeader>
                <IonContent fullscreen scroll-y="true">
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
                        <div className="px-5">
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
                        <div className="px-5">
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
                        <div className="px-5">
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
                        <div className="px-5">
                            <IonItem>
                                <IonTextarea rows={3} placeholder="Enter any additional requests"></IonTextarea>
                            </IonItem>
                        </div>
                    </IonList>
                </IonContent>
                <IonFooter>
                    <IonToolbar className="px-4">
                        <IonButton className="pb-1" color="primary" expand="block" onClick={() => setIsOpen(false)}>
                            <IonIcon icon={addCircleOutline} color="light" />
                            &nbsp;&nbsp;<span className="text-[white]">Add to order</span>
                        </IonButton>
                    </IonToolbar>
                </IonFooter>
            </IonModal>
        </>
    );
};

export default MenuListItem;
