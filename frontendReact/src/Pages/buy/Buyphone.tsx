import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Accordion, RangeSlider } from "@mantine/core";
import { Chip } from "@mantine/core";
import {
  // IconGasStation,
  // IconGauge,
  // IconManualGearbox,
  IconUsers,
  // IconCamera,
  // TablerIcon,
} from "@tabler/icons";

import xiaomi from "../../assets/Mi10.jpg";
import { Phone } from "../../Components/Phone";

const Buyphone = () => {
  const [rangeValue, setRangeValue] = useState<[number, number]>([
    20000, 80000,
  ]);
  // let [price, setPrice] = useState("");
  let naviget = useNavigate();
  let [filter, setFilter] = useState([{}]);
  let [phoneInfo, setPhoneinfo] = useState([
    {
      name: "Xiaomi 12 Pro",
      img: "https://m.media-amazon.com/images/I/31UhwG+XTJL._SY300_SX300_.jpg",
      brand: "mi",
      info: [
        { label: "108MP Quad Camera + OIS", icon: IconUsers },
        { label: "Qualcomm® Snapdragon™ 865", icon: IconUsers },
        {
          label: "16.94cm (6.67) 3D Curved E3 AMOLED Display",
          icon: IconUsers,
        },
        {
          label:
            "LiquidCool 2.0 Vapor Chamber + 6 Stack Graphite + Graphene Cooling System",
          icon: IconUsers,
        },
        { label: "LPDDR5 RAM + UFS 3.0 Storage", icon: IconUsers },
        {
          label: "30W Wireless Charging + 10W Reverse Charging",
          icon: IconUsers,
        },
      ],
      value: [
        { for: "128 Gb", price: 21000 },
        { for: "246 Gb", price: 25000 },
      ],
    },
    {
      name: "realme narzo 50",
      img: "https://m.media-amazon.com/images/I/81gRC3KTeaL._SX679_.jpg",
      brand: "mi",
      info: [
        { label: "108MP Quad Camera + OIS", icon: IconUsers },
        { label: "Qualcomm® Snapdragon™ 865", icon: IconUsers },
        {
          label: "16.94cm (6.67) 3D Curved E3 AMOLED Display",
          icon: IconUsers,
        },
        {
          label:
            "LiquidCool 2.0 Vapor Chamber + 6 Stack Graphite + Graphene Cooling System",
          icon: IconUsers,
        },
        { label: "LPDDR5 RAM + UFS 3.0 Storage", icon: IconUsers },
        {
          label: "30W Wireless Charging + 10W Reverse Charging",
          icon: IconUsers,
        },
      ],
      value: [
        { for: "128 Gb", price: 21000 },
        { for: "246 Gb", price: 25000 },
      ],
    },
    {
      name: "OnePlus 11 5G",
      img: "https://m.media-amazon.com/images/I/414+xRBltFL._SY300_SX300_.jpg",
      brand: "OnePlus",
      info: [
        { label: "108MP Quad Camera + OIS", icon: IconUsers },
        { label: "Qualcomm® Snapdragon™ 865", icon: IconUsers },
        {
          label: "16.94cm (6.67) 3D Curved E3 AMOLED Display",
          icon: IconUsers,
        },
        {
          label:
            "LiquidCool 2.0 Vapor Chamber + 6 Stack Graphite + Graphene Cooling System",
          icon: IconUsers,
        },
        { label: "LPDDR5 RAM + UFS 3.0 Storage", icon: IconUsers },
        {
          label: "30W Wireless Charging + 10W Reverse Charging",
          icon: IconUsers,
        },
      ],
      value: [
        { for: "128 Gb", price: 21000 },
        { for: "246 Gb", price: 25000 },
      ],
    },
    {
      name: "samsung s23",
      img: "https://m.media-amazon.com/images/I/61bM8Mojf6L._SX679_.jpg",
      brand: "samsung",
      info: [
        { label: "108MP Quad Camera + OIS", icon: IconUsers },
        { label: "Qualcomm® Snapdragon™ 865", icon: IconUsers },
        {
          label: "16.94cm (6.67) 3D Curved E3 AMOLED Display",
          icon: IconUsers,
        },
        {
          label:
            "LiquidCool 2.0 Vapor Chamber + 6 Stack Graphite + Graphene Cooling System",
          icon: IconUsers,
        },
        { label: "LPDDR5 RAM + UFS 3.0 Storage", icon: IconUsers },
        {
          label: "30W Wireless Charging + 10W Reverse Charging",
          icon: IconUsers,
        },
      ],
      value: [
        { for: "128 Gb", price: 21000 },
        { for: "246 Gb", price: 25000 },
      ],
    },
    {
      name: "SAMSUNG Galaxy Z",
      img: "https://m.media-amazon.com/images/I/41qW6++dNmL.jpg",
      brand: "samsung",
      info: [
        { label: "108MP Quad Camera + OIS", icon: IconUsers },
        { label: "Qualcomm® Snapdragon™ 865", icon: IconUsers },
        {
          label: "16.94cm (6.67) 3D Curved E3 AMOLED Display",
          icon: IconUsers,
        },
        {
          label:
            "LiquidCool 2.0 Vapor Chamber + 6 Stack Graphite + Graphene Cooling System",
          icon: IconUsers,
        },
        { label: "LPDDR5 RAM + UFS 3.0 Storage", icon: IconUsers },
        {
          label: "30W Wireless Charging + 10W Reverse Charging",
          icon: IconUsers,
        },
      ],
      value: [
        { for: "128 Gb", price: 21000 },
        { for: "246 Gb", price: 25000 },
      ],
    },
  ]);

  useEffect(() => {
    getPhoneInfo();
    Price();
  }, [rangeValue]);

  function Filter(brand: string, checked: boolean) {
    setPhoneinfo(phoneInfo.filter((x) => {}));
  }

  function Price() {}

  async function getPhoneInfo() {
    // let response = await axios.get("");
    // setPhoneinfo(response.data.data);
  }

  function getFilter() {
    setFilter(phoneInfo);
  }

  // function buyphone(phone: string) {
  //   naviget(`${window.location.pathname}/${phone}`);
  // }

  return (
    <div className="buy h-fit md:mt-10 mb-28">
      <div className="container mx-auto">
        <h1 className="md:text-4xl text-2xl mt-6 mx-10">Buy Old Phone</h1>
        <div className="flex md:flex-row flex-col">
          <div className="filter md:w-1/4 my-9 mx-10 hidden md:block">
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
                Price
              </label>
              <RangeSlider
                label={(value) =>
                  `₹ ${value}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
                }
                color="violet"
                size="md"
                radius="lg"
                min={5000}
                max={100000}
                step={5000}
                marks={[
                  { value: 20000, label: "₹ 20,000" },
                  { value: 50000, label: "₹ 50,000" },
                  { value: 80000, label: "₹ 80,000" },
                ]}
                value={rangeValue}
                onChange={setRangeValue}
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
          </div>
          <div className="md:hidden block">
            <Accordion variant="separated" radius="md">
              <Accordion.Item value="customization">
                <Accordion.Control>Filter</Accordion.Control>
                <Accordion.Panel>
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
                      Price
                    </label>
                    <RangeSlider
                      label={(value) =>
                        `₹ ${value}`.replace(
                          /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                          ","
                        )
                      }
                      color="violet"
                      size="md"
                      radius="lg"
                      min={5000}
                      max={100000}
                      step={5000}
                      marks={[
                        { value: 20000, label: "₹ 20,000" },
                        { value: 50000, label: "₹ 50,000" },
                        { value: 80000, label: "₹ 80,000" },
                      ]}
                      value={rangeValue}
                      onChange={setRangeValue}
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
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="main flex justify-center my-9 flex-wrap gap-20">
            {phoneInfo.map((x, n) => (
              <Phone key={n} data={x} info="Buy Phone" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buyphone;
