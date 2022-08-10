import {
  IonBadge,
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
import {
  cafe,
  cafeOutline,
  chevronDown,
  flame,
  flameOutline,
  leaf,
  sunny,
  sunnyOutline,
} from "ionicons/icons";
import React, { useMemo, useState } from "react";
import { stores } from "../data/stores";
import clsxm from "../lib/clsxm";
import StoreListItem from "./StoreListItem";

function SearchComponent() {
  const [ecoFilters, setEcoFilters] = useState({
    biodegradable: false,
    compostable: false,
    recyclable: false,
  });
  const [searchFilters, setSearchFilters] = useState({
    popular: false,
    bringYourOwn: false,
    organic: false,
  });
  const [present, dismiss] = useIonPopover(Popover, {
    onDismiss: () => dismiss(),
    ecoFilters: ecoFilters,
    handleChange: (e) => handleChangeEcoFilter(e),
  });
  const handleChangeEcoFilter = (e) => {
    setEcoFilters({
      ...ecoFilters,
      [e.target.name]: e.target.checked,
    });
  };
  const handleChangeSearchFilter = (name, checked) => {
    setSearchFilters({
      ...searchFilters,
      [name]: checked,
    });
  };
  // count the number of eco filters that are checked, use memo
  const ecoFilterCount = useMemo(() => {
    let count = 0;
    for (const key in ecoFilters) {
      if (ecoFilters[key]) {
        count++;
      }
    }
    return count;
  }, [ecoFilters]);

  const searchFilterStores = useMemo(() => {
    let filteredStores = stores;
    for (const key in searchFilters) {
      if (searchFilters[key]) {
        filteredStores = filteredStores.filter((store) => store.filter[key]);
      }
    }
    for (const key in ecoFilters) {
      if (ecoFilters[key]) {
        filteredStores = filteredStores.filter((store) => store.filter[key]);
      }
    }
    return filteredStores;
  }, [searchFilters, ecoFilters]);

  return (
    <div>
      <div className="flex gap-0 flex-wrap">
        <IonChip
          className="flex-shrink-0"
          color="primary"
          onClick={(e) =>
            present({
              event: e.nativeEvent,
              cssClass: "[--min-width:_16rem]",
            })
          }
        >
          <IonIcon icon={leaf} />
          <IonLabel>Eco Friendly</IonLabel>
          {ecoFilterCount > 0 ? (
            <IonBadge color="success" className="ml-2">
              {ecoFilterCount}
            </IonBadge>
          ) : (
            <IonIcon icon={chevronDown} />
          )}
        </IonChip>
        <IonChipToggle
          className="flex-shrink-0"
          color="purple"
          icons={{
            checked: flame,
            unchecked: flameOutline,
          }}
          onChange={(checked) => handleChangeSearchFilter("popular", checked)}
        >
          <IonLabel>Popular</IonLabel>
        </IonChipToggle>
        <IonChipToggle
          className="flex-shrink-0"
          color="information"
          icons={{
            checked: sunny,
            unchecked: sunnyOutline,
          }}
          onChange={(checked) => handleChangeSearchFilter("organic", checked)}
        >
          <IonLabel>Organic</IonLabel>
        </IonChipToggle>
        <IonChipToggle
          className="flex-shrink-0"
          color="warning"
          icons={{
            checked: cafe,
            unchecked: cafeOutline,
          }}
          onChange={(checked) =>
            handleChangeSearchFilter("bringYourOwn", checked)
          }
        >
          <IonLabel>Bring-your-own</IonLabel>
        </IonChipToggle>
      </div>
      <IonList>
        <IonListHeader>
          <IonLabel>
            {searchFilterStores.length > 0 ? (
              <>{searchFilterStores.length} stores found</>
            ) : (
              "No stores found"
            )}
          </IonLabel>
        </IonListHeader>
        {searchFilterStores.map((store) => (
          <StoreListItem key={store.id} store={store} />
        ))}
      </IonList>
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
            <IonLabel className="capitalize !flex flex-grow justify-between items-center">
              <h2>{key}</h2>
              <img
                src={`/assets/icon/${key}.svg`}
                className="w-5 h-5 object-contain"
              />
            </IonLabel>
            <IonCheckbox
              slot="start"
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
  onChange,
  checked,
  className,
  color,
  icons,
  children,
  ...props
}: {
  onChange?: (checked: boolean) => void;
  checked?: boolean;
  className?: string;
  color?: string;
  icons: {
    checked: string;
    unchecked: string;
  };
  children?: React.ReactNode;
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const onClick = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
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
      <IonIcon icon={isChecked ? icons.checked : icons.unchecked} />
      {children}
    </IonChip>
  );
};
