import { createContext } from "react";

export type QueryState = {
  name?: string;
  team?: string;
  age?: string;
  score?: string;
};

export type ContextValue = [
  query: QueryState,
  setQuery: React.Dispatch<React.SetStateAction<QueryState>>
];

export const AppContext = createContext<ContextValue | null>(null);
