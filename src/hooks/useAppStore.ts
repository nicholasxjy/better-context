import { useContext, useEffect, useState } from "react";
import { QueryState, AppContext } from "../AppContext";

const useAppStore = (): [QueryState, (p: Partial<QueryState>) => void] => {
  const storeCtx = useContext(AppContext)!;
  const [state, setState] = useState(storeCtx.getState());
  // add subscribe
  useEffect(() => {
    const unsubscribe = storeCtx.subscribe((s: QueryState) => {
      setState(s);
    });

    return () => unsubscribe();
  }, []);

  return [state, storeCtx.setState];
};

export default useAppStore;
