import { useState } from "react";
import { Chip, Slider } from "@mantine/core";

const Filters = () => {
  const [value, setValue] = useState(30000);
  return (
    <>
      <div className="brand mt-2 mb-5">
        <label
          htmlFor="steps-range"
          className="block mb-2 md:text-xl text-lg font-bold text-gray-900 dark:text-white"
        >
          Brand
        </label>
        <Chip.Group multiple mt={15}>
          <Chip
            className="w-full"
            color="violet"
            variant="filled"
            radius="md"
            value="apple"
          >
            Apple
          </Chip>
          <Chip
            className="w-full"
            color="violet"
            variant="filled"
            radius="md"
            value="mi"
          >
            Mi
          </Chip>
          <Chip
            className="w-full"
            color="violet"
            variant="filled"
            radius="md"
            value="samsung"
          >
            Samsung
          </Chip>
        </Chip.Group>
      </div>
      <hr className="border-purple-700" />
      <div className="price mt-2 mb-10">
        <label
          htmlFor="steps-range"
          className="block mb-5 md:text-xl text-lg font-bold text-gray-900 dark:text-white"
        >
          maxPrice
        </label>
        <Slider
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
        <label
          className="block mb-2 md:text-xl text-lg font-bold text-gray-900 dark:text-white"
          htmlFor=""
        >
          RAM
        </label>
        <Chip.Group multiple mt={15}>
          <Chip
            className="w-full"
            color="violet"
            variant="filled"
            radius="md"
            value="2"
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
          >
            8 GB
          </Chip>
        </Chip.Group>
      </div>
      <hr className="border-purple-700" />
      <div className="storage mt-2 mb-5">
        <label
          className="block mb-2 md:text-xl text-lg font-bold text-gray-900 dark:text-white"
          htmlFor=""
        >
          STORAGE
        </label>
        <Chip.Group multiple mt={15}>
          <Chip
            className="w-full"
            color="violet"
            variant="filled"
            radius="md"
            value="16"
          >
            16 GB
          </Chip>
          <Chip
            className="w-full"
            color="violet"
            variant="filled"
            radius="md"
            value="32"
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
          >
            128 GB
          </Chip>
          <Chip
            className="w-full"
            color="violet"
            variant="filled"
            radius="md"
            value="256"
          >
            256 GB
          </Chip>
        </Chip.Group>
      </div>
    </>
  );
};

export default Filters;
