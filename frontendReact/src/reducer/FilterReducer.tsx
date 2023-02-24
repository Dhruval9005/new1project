import { useContext } from "react";
import { phoneInfo } from "../context/PhoneContext";
import { FilterContext } from "../context/Filterscontext";

export let FilterPhone = phoneInfo;

// export interface State {}

export interface Action {
  type: string;
  payload: {
    name: string;
    value: string;
    fliter_price: number;
    all_phone: typeof phoneInfo;
  };
}

export const InitialState = {
  all_phone: phoneInfo,
  filter_phone: FilterPhone,
  filters: {
    brand: "",
    price: 0,
    ram: "",
    storage: "",
  },
};

const FilterReducer = (state: typeof InitialState, action: Action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload.all_phone],
        all_products: [...action.payload.all_phone],
        filters: { ...state.filters },
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      console.log();

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRICE":
      const { fliter_price } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          price: fliter_price,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_phone } = state;
      let tampFilterPhone = [...all_phone];

      const { brand, price, ram, storage } = state.filters;

      if (brand !== "all") {
        tampFilterPhone = all_phone.filter(
          (curElem) => curElem.brand === brand
        );
      }

      if (ram !== "all") {
        tampFilterPhone = all_phone.filter((curElem) => curElem.ram === ram);
      }

      if (storage !== "all") {
        tampFilterPhone = all_phone.filter(
          (curElem) => curElem.storage === storage
        );
      }

      if (Number(price) === 0) {
        tampFilterPhone = all_phone.filter(
          (curElem) => curElem.value[0].price == Number(price)
        );
      } else {
        tampFilterPhone = all_phone.filter(
          (curElem) => curElem.value[0].price <= Number(price)
        );
      }
      // console.log(tampFilterPhone);
      

      return {
        ...state,
        filter_phone: tampFilterPhone,
      };

    // case "FILTER_BRAND":
    //   let { brand } = action.payload;
    //   FilterPhone = phoneInfo.filter((curElem) => {
    //     // brand.map((filter) => {

    //     return curElem.brand == brand;

    //     // });
    //   });

    //   return { ...FilterPhone };

    // case "FILTER_RAM":
    //   let { ram } = action.payload;
    //   FilterPhone = phoneInfo.filter((curElem) => {
    //     // ram.map((filter) => {
    //     return curElem.ram == ram;
    //     // });
    //   });
    //   return { ...FilterPhone };

    // case "FILTER_STORAGE":
    //   let { storage } = action.payload;
    //   FilterPhone = phoneInfo.filter((curElem) => {
    //     // storage.map((filter) => {
    //     return curElem.storage == storage;
    //     // });
    //   });
    //   return { ...FilterPhone };

    // case "FILTER_PRICE":
    //   let { price } = action.payload;
    //   if (price == 0) {
    //     return FilterPhone;
    //   } else {
    //     FilterPhone = phoneInfo.filter((curElem) => {
    //       return curElem.value[0].price <= price;
    //     });
    //   }
    //   return { ...FilterPhone };

    default:
      return state;
  }
};

export default FilterReducer;
