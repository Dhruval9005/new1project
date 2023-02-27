import {
  MouseEvent,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import FilterReducer, { InitialState } from "../reducer/FilterReducer";
import { phoneInfo } from "./PhoneContext";

const defaultState = {
  FilterPhone: (event: MouseEvent<HTMLInputElement>) => {},
  FilterPrice: (price: number) => {},
  ...InitialState,
};

type filterProvideProps = {
  children: ReactNode;
};

export const FilterContext = createContext(defaultState);

export default function FilterContextPeovider({
  children,
}: filterProvideProps) {
  const [state, dispatch] = useReducer(FilterReducer, InitialState);
  const [filter_value, setFilter_value] = useState<string[]>([""]);

  const FilterPhone = (event: MouseEvent<HTMLInputElement>) => {
    let name = event.currentTarget.name;
    let value = event.currentTarget.value;
    let checked = event.currentTarget.checked;

    if (checked) {
      filter_value.push(value);
    } else {
      filter_value.splice(filter_value.indexOf(value), 1);
    }

    return dispatch({
      type: "UPDATE_FILTERS_VALUE",
      payload: { name, filter_value, all_phone: [], fliter_price: 0 },
    });
  };

  const FilterPrice = (price: number) => {
    return dispatch({
      type: "FILTER_PRICE",
      payload: {
        name: "",
        filter_value: [],
        all_phone: [],
        fliter_price: price,
      },
    });
  };

  useEffect(() => {
    dispatch({
      type: "FILTER_PRODUCTS",
      payload: {
        name: "",
        filter_value: [],
        all_phone: [],
        fliter_price: 0,
      },
    });
  }, [phoneInfo, state.filters]);

  useEffect(() => {
    dispatch({
      type: "LOAD_FILTER_PRODUCTS",
      payload: {
        name: "",
        filter_value: [],
        all_phone: phoneInfo,
        fliter_price: 0,
      },
    });
  }, [phoneInfo]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        FilterPhone,
        FilterPrice,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export const useFilterContext = () => {
  return useContext(FilterContext);
};
