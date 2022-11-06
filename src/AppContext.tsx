import { createStoreContext } from "./contexts/StoreContext";

export type QueryState = {
  name?: string;
  team?: string;
  age?: string;
  score?: string;
};

const initState: QueryState = {
  name: "",
  team: "",
  age: undefined,
  score: undefined,
};

const { StoreContextProvider: AppContextProvider, useStore: useAppContext } =
  createStoreContext<QueryState>(initState);

export { AppContextProvider, useAppContext };
