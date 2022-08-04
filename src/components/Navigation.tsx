import { IonRouterOutlet } from "@ionic/react";
import { Redirect, Route } from "react-router-dom";

import Tab1 from "../pages/Tab1";
import Tab2 from "../pages/Tab2";
import Tab3 from "../pages/Tab3";

function Navigation() {
  return (
    <IonRouterOutlet id="ion-app">
      <Route exact path="/tab1" component={Tab1} />
      <Route exact path="/tab2" component={Tab2} />
      <Route exact path="/tab3" component={Tab3} />
      <Route exact path="/">
        <Redirect to="/tab1" />
      </Route>
    </IonRouterOutlet>
  );
}
export default Navigation;
