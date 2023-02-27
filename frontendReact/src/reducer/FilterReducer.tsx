import { phoneInfo } from "../context/PhoneContext";

export interface Action {
  type: string;
  payload: {
    name: string;
    filter_value: string[];
    fliter_price: number;
    all_phone: typeof phoneInfo;
  };
}

export const InitialState = {
  all_phone: phoneInfo,
  filter_phone: [...phoneInfo],
  filters: {
    brand: [""],
    price: 0,
    ram: [""],
    storage: [""],
  },
};

const FilterReducer = (state: typeof InitialState, action: Action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_phone: [...action.payload.all_phone],
        all_products: [...action.payload.all_phone],
        filters: { ...state.filters },
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, filter_value } = action.payload;
      let ram_filter_value = [""];
      let storage_filter_value = [""];
      let brand_filter_value = [""];
      if (name == "ram") {
        ram_filter_value = filter_value;
      } else if (name == "storage") {
        storage_filter_value = filter_value;
      } else if (name == "brand") {
        brand_filter_value = filter_value;
      }
      return {
        ...state,
        filters: {
          ...state.filters,
          ram: ram_filter_value,
          storage: storage_filter_value,
          brand: brand_filter_value,
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
      const { brand, price, ram, storage } = state.filters;
      let tampFilterPhone = [...state.all_phone];

      const equalsCheck = (a: string[], b: string[]) => {
        return JSON.stringify(a) === JSON.stringify(b);
      };

      if (!equalsCheck(brand, [""])) {
        tampFilterPhone = tampFilterPhone.filter((curElem) => {
          return brand.some((filter) => {
            return curElem.brand === filter;
          });
        });
      }

      if (!equalsCheck(ram, [""])) {
        tampFilterPhone = tampFilterPhone.filter((curElem) => {
          return ram.some((filter) => {
            return curElem.ram == filter;
          });
        });
      }

      if (!equalsCheck(storage, [""])) {
        tampFilterPhone = tampFilterPhone.filter((curElem) => {
          return storage.some((filter) => {
            return curElem.storage == filter;
          });
        });
      }

      if (price != 0) {
        tampFilterPhone = tampFilterPhone.filter(
          (curElem) => curElem.value[0].price <= price
        );
      }

      return {
        ...state,
        filter_phone: tampFilterPhone,
      };

    default:
      return state;
  }
};

export default FilterReducer;
