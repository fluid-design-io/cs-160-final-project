import { IonRouterOutlet } from "@ionic/react";
import { Redirect, Route } from "react-router-dom";

import AccountComponent from "./AccountComponent";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import Orders from "../pages/Orders";
import Rewards from "../pages/Rewards";
import StoreDetail from "../pages/StoreDetail";
import Wiki from "../pages/Wiki";
import WikiDetail from "../pages/WikiDetail";

function Navigation() {
  return (
    <IonRouterOutlet id="ion-app">
      <Route exact path="/home" component={Home} />
      <Route exact path="/orders" component={Orders} />
      <Route exact path="/rewards" component={Rewards} />
      <Route exact path="/wiki" component={Wiki} />
      <Route exact path="/wiki/:id" component={WikiDetail} />
      <Route exact path="/store/:id" component={StoreDetail} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/account" component={AccountComponent} />

      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
    </IonRouterOutlet>
  );
}
export default Navigation;
