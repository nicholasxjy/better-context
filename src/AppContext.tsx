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

// export const AppContext = createContext<ContextValue | null>(null);

// export const AppContextProvider: React.FC<any> = ({ children }) => {
//   const [query, setQuery] = useState({
//     name: "",
//     team: "",
//     age: undefined,
//     score: undefined,
//   } as QueryState);

//   return (
//     <AppContext.Provider
//       value={{
//         query,
//         setQuery,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };
