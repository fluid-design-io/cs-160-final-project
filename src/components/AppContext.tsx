import { Storage } from "@ionic/storage";
import { createContext,useMemo, useState } from "react";
import { useEffect } from "react";

export const AppContext = createContext({
  tabBar: {
    tabBarHidden: false,
    setTabBarHidden: (hidden: boolean) => null,
  },
  store: undefined as Storage | undefined,
});

export const AppContextProvider = (props: { children: any }) => {
  const [store, setStore] = useState<Storage | undefined>(undefined);
  const init = new Storage({
    name: "AppStorage",
    version: 1.0,
    storeName: "AppStore",
  });
  const getStore = async () => {
    const res = await init.create();
    return res;
  };
  useEffect(() => {
    getStore().then((res) => setStore(res));
  }, []);
  const [tabBarHidden, setTabBarHidden] = useState<boolean>(false);
  const tabBar = useMemo(
    () => ({ tabBarHidden, setTabBarHidden }),
    [tabBarHidden]
  );
  const value = { tabBar, store };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
