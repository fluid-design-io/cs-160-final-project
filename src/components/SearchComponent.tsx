import {
  IonCheckbox,
  IonChip,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  useIonPopover,
} from "@ionic/react";
import { cafeOutline, chevronDown, flame, leaf } from "ionicons/icons";
import { useState } from "react";
import clsxm from "../lib/clsxm";

function SearchComponent() {
  const [ecoFilters, setEcoFilters] = useState({
    biodegradable: false,
    compostable: false,
    recyclable: false,
  });
  const [present, dismiss] = useIonPopover(Popover, {
    onDismiss: () => dismiss(),
    ecoFilters: ecoFilters,
    handleChange: (e) => handleChange(e),
  });
  const handleChange = (e) => {
    setEcoFilters({
      ...ecoFilters,
      [e.target.name]: e.target.checked,
    });
  };
  return (
    <div>
      <div className="flex gap-2 flex-wrap">
        <IonChip
          className="flex-shrink-0"
          color="primary"
          onClick={(e) =>
            present({
              event: e.nativeEvent,
              cssClass: "[--min-width:_16rem]"
            })
          }
        >
          <IonIcon icon={leaf} />
          <IonLabel>Eco Friendly</IonLabel>
          <IonIcon icon={chevronDown} />
        </IonChip>
        <IonChipToggle className="flex-shrink-0" color="purple">
          <IonIcon icon={flame} />
          <IonLabel>Popular</IonLabel>
        </IonChipToggle>
        <IonChipToggle className="flex-shrink-0" color="information">
          <IonIcon icon={cafeOutline} />
          <IonLabel>Bring-your-own</IonLabel>
        </IonChipToggle>
      </div>
    </div>
  );
}
export default SearchComponent;
const Popover = ({
  ecoFilters,
  handleChange,
}: {
  ecoFilters: {
    [key: string]: boolean;
  };
  handleChange: (e) => void;
}) => {
  return (
    <IonContent className="ion-padding hide-scroll">
      <IonList>
        <IonListHeader>Filter by:</IonListHeader>
        {Object.keys(ecoFilters).map((key) => (
          <IonItem key={key}>
            <IonLabel slot="end" className="capitalize">
              {key}
            </IonLabel>
            <IonCheckbox
              name={key}
              checked={ecoFilters[key]}
              onIonChange={handleChange}
              value={key}
            />
          </IonItem>
        ))}
      </IonList>
    </IonContent>
  );
};
const IonChipToggle = ({
  onCheck,
  onUncheck,
  checked,
  className,
  color,
  children,
  ...props
}: {
  onCheck?: () => void;
  onUncheck?: () => void;
  checked?: boolean;
  className?: string;
  color?: string;
  children?: React.ReactNode;
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const onClick = () => {
    if (isChecked) {
      if (onUncheck) {
        onUncheck();
      }
      setIsChecked(false);
    } else {
      if (onCheck) {
        onCheck();
      }
      setIsChecked(true);
    }
  };
  return (
    <IonChip
      onClick={onClick}
      outline={!isChecked}
      className={clsxm(className)}
      color={color || "primary"}
      {...props}
    >
      {children}
    </IonChip>
  );
};
