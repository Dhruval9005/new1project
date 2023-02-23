import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import FilterReducer from "../reducer/FilterReducer";
import { phoneInfo } from "./PhoneContext";

type Filter = {
  Filter_Phone: [];
  all_phone: [];
  Brand: string[];
  Price: number;
  Ram: string[];
  Storage: string[];
};

type updateFilterValue = {
  name: string;
  value: string;
};

interface filterContextInterface {
  filter: Filter;
  updateFilterValue: updateFilterValue;
}

type filterProvideProps = {
  children: ReactNode;
};

const defaultState = {
  filter: {
    Filter_Phone: [],
    all_phone: [],
    Brand: [],
    Price: 0,
    Ram: [],
    Storage: [],
  },
  updateFilterValue: {
    name: "",
    value: "",
  },
} as filterContextInterface;

export const FilterContext = createContext(defaultState);

export default function UserPeovider({ children }: filterProvideProps) {
  const [state, dispatch] = useReducer(FilterReducer, defaultState);

  const [filter, setFilter] = useState<Filter>({
    Filter_Phone: [],
    all_phone: [],
    Brand: [],
    Price: 0,
    Ram: [],
    Storage: [],
  });

  const updateFilterValue = (event: any) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [phoneInfo, state.sorting_value, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: phoneInfo });
  }, [phoneInfo]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        filter,
        setFilter,
        updateFilterValue,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
