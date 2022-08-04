import { IonApp, IonButton, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/ionic-swiper.css";
/* Optional CSS utils that can be commented out */
/* import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css"; */
/* Theme variables */
import "./theme/index.css";
import "./theme/variables.css";

import Tabs from "./components/Tabs";


setupIonicReact();

const App: React.FC = () => (
  <LayoutGroup>
    <IonApp key={"app"}>
      <AnimatePresence>
        <IonReactRouter>
          <Tabs />
        </IonReactRouter>
      </AnimatePresence>
    </IonApp>
  </LayoutGroup>
);

export default App;
