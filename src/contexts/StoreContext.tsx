import { createContext, useContext, useEffect, useRef, useState } from "react";
import { createStore, Store } from "./createStore";

export function createStoreContext<T>(initState: T) {
  const store = createStore<T>(initState);

  const StoreContext = createContext<Store<T> | null>(null);

  const StoreContextProvider: React.FC<any> = ({ children }) => {
    return (
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
  };

  const useStore = (): [T, (p: Partial<T>) => void] => {
    const storeCtx = useContext(StoreContext)!;
    const [state, setState] = useState(storeCtx.getState());
    // add subscribe
    useEffect(() => {
      const unsubscribe = storeCtx.subscribe((s: T) => {
        setState(s);
      });

      return () => unsubscribe();
    }, []);

    return [state, storeCtx.setState];
  };

  return {
    StoreContextProvider,
    useStore,
  };
}
