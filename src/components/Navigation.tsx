import { IonRouterOutlet } from "@ionic/react";
import { Redirect, Route } from "react-router-dom";

import Home from "../pages/Home";
import Orders from "../pages/Orders";
import Rewards from "../pages/Rewards";
import Wiki from "../pages/Wiki";

function Navigation() {
  return (
    <IonRouterOutlet id="ion-app">
      <Route exact path="/home" component={Home} />
      <Route exact path="/orders" component={Orders} />
      <Route exact path="/rewards" component={Rewards} />
      <Route exact path="/wiki" component={Wiki} />
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
    </IonRouterOutlet>
  );
}
export default Navigation;
