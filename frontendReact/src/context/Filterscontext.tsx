import {
  ChangeEvent,
  MouseEvent,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
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

  const FilterPhone = (event: MouseEvent<HTMLInputElement>) => {
    let name = event.currentTarget.name;
    let value = event.currentTarget.value;

    return dispatch({
      type: "UPDATE_FILTERS_VALUE",
      payload: { name, value, all_phone: [], fliter_price: 0 },
    });
  };
  const FilterPrice = (price: number) => {
    return dispatch({
      type: "FILTER_PRICE",
      payload: { name: "", value: "", all_phone: [], fliter_price: price },
    });
  };

  useEffect(() => {
    dispatch({
      type: "FILTER_PRODUCTS",
      payload: {
        name: "",
        value: "",
        all_phone: [],
        fliter_price: 0,
      },
    });
  }, [phoneInfo, state.filters]);

  useEffect(() => {
    dispatch({
      type: "LOAD_FILTER_PRODUCTS",
      payload: { name: "", value: "", all_phone: phoneInfo, fliter_price: 0 },
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
