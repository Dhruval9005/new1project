import { Chip, Slider } from "@mantine/core";
import { useContext, useEffect, useReducer, useState } from "react";
import FilterReducer, { InitialState } from "../reducer/FilterReducer";
import { phoneInfo } from "../context/PhoneContext";
import { FilterContext, useFilterContext } from "../context/Filterscontext";

const getUniqueData = (data: typeof phoneInfo, attr: string) => {
  let newVal = data.map((curElem: any) => {
    return curElem[attr];
  });

  return (newVal = ["all", ...new Set(newVal)]);
};

const Filters = () => {
  const Brands = getUniqueData(phoneInfo, "brand");
  const Ram = getUniqueData(phoneInfo, "ram");
  const Storage = getUniqueData(phoneInfo, "storage");
  const [value, setValue] = useState(30000);
  const {
    FilterPhone,
    FilterPrice,
    filters: { brand, price, ram, storage },
  } = useFilterContext();

  useEffect(() => {
    FilterPrice(value);
  }, [value]);

  return (
    <>
      <div className="brand mt-2 mb-5 md:w-52">
        <label className="block mb-2 md:text-xl text-lg font-bold text-gray-900 dark:text-white">
          Brand
        </label>
        <Chip.Group multiple mt={15}>
          {Brands.map((brand: any, n) => (
            <Chip
              key={n}
              className="w-full"
              color="violet"
              variant="filled"
              radius="md"
              value={brand}
              name="brand"
              styles={{
                label: {
                  width: "100%",
                },
                root: {
                  display: "flex",
                },
              }}
              onClick={FilterPhone}
            >
              {brand}
            </Chip>
          ))}
          {/* <Chip
            className="w-full"
            color="violet"
            variant="filled"
            radius="md"
            value="apple"
            name="apple"
            onClick={(e) => console.log(e.target)}
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
          </Chip> */}
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
          onChange={setValue}
        />
      </div>
      <hr className="border-purple-700" />
      <div className="ram mt-2 mb-5">
        <label className="block mb-2 md:text-xl text-lg font-bold text-gray-900 dark:text-white">
          RAM
        </label>
        <Chip.Group multiple mt={15}>
          {Ram.map((ram: any, n) => (
            <Chip
              key={n}
              className="w-full"
              color="violet"
              variant="filled"
              radius="md"
              value={ram}
              name="ram"
              styles={{
                label: {
                  width: "100%",
                },
                root: {
                  display: "flex",
                },
              }}
              onClick={FilterPhone}
            >
              {ram}
            </Chip>
          ))}
          {/* <Chip
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
          </Chip> */}
        </Chip.Group>
      </div>
      <hr className="border-purple-700" />
      <div className="storage mt-2 mb-5">
        <label className="block mb-2 md:text-xl text-lg font-bold text-gray-900 dark:text-white">
          STORAGE
        </label>
        <Chip.Group multiple mt={15}>
          {Storage.map((ram: any, n) => (
            <Chip
              key={n}
              className="w-full"
              color="violet"
              variant="filled"
              radius="md"
              value={ram}
              name="storage"
              styles={{
                label: {
                  width: "100%",
                },
                root: {
                  display: "flex",
                },
              }}
              onClick={FilterPhone}
            >
              {ram}
            </Chip>
          ))}
          {/* <Chip
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
          </Chip> */}
        </Chip.Group>
      </div>
    </>
  );
};

export default Filters;
