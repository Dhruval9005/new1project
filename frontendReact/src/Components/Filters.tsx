import { useEffect, useState } from "react";
import { Chip, Slider } from "@mantine/core";
import { phoneInfo } from "../context/PhoneContext";
import { useFilterContext } from "../context/Filterscontext";

const getUniqueData = (data: typeof phoneInfo, attr: string) => {
  let newVal = data.map((curElem: any) => {
    return curElem[attr];
  });
  return (newVal = [...new Set(newVal)]);
};

const Filters = () => {
  const Brands = getUniqueData(phoneInfo, "brand");
  const Ram = getUniqueData(phoneInfo, "ram");
  const Storage = getUniqueData(phoneInfo, "storage");
  const [value, setValue] = useState(70000);
  const {
    FilterPhone,
    FilterPrice,
    // filters: { brand, price, ram, storage },
  } = useFilterContext();

  useEffect(() => {
    FilterPrice(value);
  }, [value]);

  return (
    <>
      <div className="brand mt-2 mb-5">
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
          max={100000}
          step={5000}
          marks={[
            { value: 10000, label: "₹ 10,000" },
            { value: 50000, label: "₹ 50,000" },
            { value: 90000, label: "₹ 90,000" },
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
        </Chip.Group>
      </div>
      <hr className="border-purple-700" />
      <div className="storage mt-2 mb-5">
        <label className="block mb-2 md:text-xl text-lg font-bold text-gray-900 dark:text-white">
          STORAGE
        </label>
        <Chip.Group multiple mt={15}>
          {Storage.map((storage: any, n) => (
            <Chip
              key={n}
              className="w-full"
              color="violet"
              variant="filled"
              radius="md"
              value={storage}
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
              {storage}
            </Chip>
          ))}
        </Chip.Group>
      </div>
    </>
  );
};

export default Filters;
