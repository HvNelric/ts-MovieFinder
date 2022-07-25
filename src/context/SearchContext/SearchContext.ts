import { createContext } from "react";
import { ContextSearch } from "../../Types/Types";

//export const SearchContext = createContext<ContextSearch>({} as ContextSearch)
export const SearchContext = createContext<ContextSearch>({
    search: '',
    setSearch: () => {}
});