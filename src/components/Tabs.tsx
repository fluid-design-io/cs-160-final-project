import {
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { compass, person, search } from "ionicons/icons";
import { Redirect, Route } from "react-router-dom";

import Orders from "../pages/Orders";
import Tab2 from "../pages/Rewards";
import Tab3 from "../pages/Wiki";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface props {}

const Tabs: React.FC<props> = () => {
  return (
    <IonTabs>
      <IonRouterOutlet id="ion-app">
        <Route exact path="/tab1" component={Orders} />
        <Route exact path="/tab2" component={Tab2} />
        <Route exact path="/tab3" component={Tab3} />
        <Route exact path="/">
          <Redirect to="/tab1" />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="explore" href="/tab1">
          <IonIcon icon={compass} />
        </IonTabButton>
        <IonTabButton tab="search" href="/tab2">
          <IonIcon icon={search} />
        </IonTabButton>
        <IonTabButton tab="accout" href="/tab3">
          <IonIcon icon={person} />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
