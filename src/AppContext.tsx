import { createContext } from "react";
import { Store } from "./contexts/createStore";

export type QueryState = {
  name?: string;
  team?: string;
  age?: string;
  score?: string;
};

export const AppContext = createContext<Store<QueryState> | null>(null);
