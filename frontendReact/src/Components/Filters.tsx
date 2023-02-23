import { Chip, Slider } from "@mantine/core";
import { phoneInfo } from "../context/PhoneContext";
import { useContext, useReducer, useState } from "react";
import { FilterContext } from "../context/Filterscontext";

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};

export function reducer(state: any, action: any) {
  let tempFilterProduct = phoneInfo;
  switch (action.type) {
    case "PRICE_FLTER":
      if (action.price === 0) {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.value[0].price == action.price
        );
      } else {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.value[0].price <= action.price
        );
      }
      return {
        ...state,
        filter_products: tempFilterProduct,
      };
  }
}

const Filters = () => {
  const [value, setValue] = useState(30000);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { filter, updateFilterValue } = useContext(FilterContext);
  return (
    <>
      <div className="brand mt-2 mb-5">
        <label className="block mb-2 md:text-xl text-lg font-bold text-gray-900 dark:text-white">
          Brand
        </label>
        <Chip.Group multiple mt={15}>
          <Chip
            className="w-full"
            color="violet"
            variant="filled"
            radius="md"
            value="apple"
            name="brand"
          >
            Apple
          </Chip>
          <Chip
            className="w-full"
            color="violet"
            variant="filled"
            radius="md"
            value="mi"
            name="brand"
          >
            Mi
          </Chip>
          <Chip
            className="w-full"
            color="violet"
            variant="filled"
            radius="md"
            value="samsung"
            name="brand"
          >
            Samsung
          </Chip>
        </Chip.Group>
      </div>
      <hr className="border-purple-700" />
      <div className="price mt-2 mb-10">
        <label className="block mb-5 md:text-xl text-lg font-bold text-gray-900 dark:text-white">
          maxPrice
        </label>
        <Slider
          name="price"
          label={(value) =>
            `₹ ${value}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          }
          color="violet"
          max={50000}
          step={5000}
          marks={[
            { value: 10000, label: "₹ 10,000" },
            { value: 30000, label: "₹ 30,000" },
            { value: 50000, label: "₹ 50,000" },
          ]}
          value={value}
          onChangeEnd={setValue}
        />
      </div>
      <hr className="border-purple-700" />
      <div className="ram mt-2 mb-5">
        <label className="block mb-2 md:text-xl text-lg font-bold text-gray-900 dark:text-white">
          RAM
        </label>
        <Chip.Group multiple mt={15}>
          <Chip
            className="w-full"
            color="violet"
            variant="filled"
            radius="md"
            value="2"
            name="ram"
          >
            2 GB
          </Chip>
          <Chip
            className="w-full"
            color="violet"
            variant="filled"
            radius="md"
            value="3"
          >
            3 GB
          </Chip>
          <Chip
            className="w-full"
            color="violet"
            variant="filled"
            radius="md"
            value="4"
            name="ram"
          >
            4 GB
          </Chip>
          <Chip
            className="w-full"
            color="violet"
            variant="filled"
            radius="md"
            value="6"
          >
            6 GB
          </Chip>
          <Chip
            className="w-full"
            color="violet"
            variant="filled"
            radius="md"
            value="8"
            name="ram"
          >
            8 GB
          </Chip>
        </Chip.Group>
      </div>
      <hr className="border-purple-700" />
      <div className="storage mt-2 mb-5">
        <label className="block mb-2 md:text-xl text-lg font-bold text-gray-900 dark:text-white">
          STORAGE
        </label>
        <Chip.Group multiple mt={15}>
          <Chip
            className="w-full"
            color="violet"
            variant="filled"
            radius="md"
            value="16"
            name="storage"
          >
            16 GB
          </Chip>
          <Chip
            className="w-full"
            color="violet"
            variant="filled"
            radius="md"
            value="32"
            name="storage"
          >
            32 GB
          </Chip>
          <Chip
            className="w-full"
            color="violet"
            variant="filled"
            radius="md"
            value="64"
          >
            64 GB
          </Chip>
          <Chip
            className="w-full"
            color="violet"
            variant="filled"
            radius="md"
            value="128"
            name="storage"
          >
            128 GB
          </Chip>
          <Chip
            className="w-full"
            color="violet"
            variant="filled"
            radius="md"
            value="256"
            name="storage"
          >
            256 GB
          </Chip>
        </Chip.Group>
      </div>
    </>
  );
};

export default Filters;
