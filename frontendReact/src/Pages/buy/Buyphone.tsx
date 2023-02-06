import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { RangeSlider } from "@mantine/core";
import { Chip } from "@mantine/core";
import {
  IconGasStation,
  IconGauge,
  IconManualGearbox,
  IconUsers,
  IconCamera,
  TablerIcon,
} from "@tabler/icons";

import xiaomi from "../../assets/Mi10.jpg";
import { Phone } from "../../Components/Phone";

const Buyphone = () => {
  const [rangeValue, setRangeValue] = useState<[number, number]>([
    20000, 80000,
  ]);
  let naviget = useNavigate();
  let [price, setPrice] = useState("");
  let [filter, setFilter] = useState([{}]);
  let [phoneInfo, setPhoneinfo] = useState([
    {
      name: "Mi 10",
      img: xiaomi,
      brand: "Mi",
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
        { for: "128 Gb", price: "21,000" },
        { for: "246 Gb", price: "25,000" },
      ],
    },
    {
      name: "Mi 10",
      img: xiaomi,
      brand: "Mi",
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
        { for: "128 Gb", price: "21,000" },
        { for: "246 Gb", price: "25,000" },
      ],
    },
    {
      name: "Mi 10",
      img: xiaomi,
      brand: "Mi",
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
        { for: "128 Gb", price: "21,000" },
        { for: "246 Gb", price: "25,000" },
      ],
    },
    {
      name: "Mi 10",
      img: xiaomi,
      brand: "Mi",
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
        { for: "128 Gb", price: "21,000" },
        { for: "246 Gb", price: "25,000" },
      ],
    },
    {
      name: "Mi 10",
      img: xiaomi,
      brand: "Mi",
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
        { for: "128 Gb", price: "21,000" },
        { for: "246 Gb", price: "25,000" },
      ],
    },
  ]);

  useEffect(() => {
    getPhoneInfo();
    getFilter();
  }, []);

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

  function buyphone(phone: string) {
    naviget(`${window.location.pathname}/${phone}`);
  }

  return (
    <div className="buy h-fit md:mt-10 mb-28">
      <div className="container mx-auto">
        <h1 className="md:text-4xl text-2xl mt-6 mx-10">Buy Old Phone</h1>
        <div className="flex md:flex-row flex-col">
          <div className="filter md:w-1/4 my-9 mx-10 hidden md:block">
            <div className="brand flex flex-col my-5">
              <label
                htmlFor="steps-range"
                className="block mb-2 md:text-2xl text-lg font-bold text-gray-900 dark:text-white"
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
              {/* <div>
                <input
                  type="checkbox"
                  name="brand"
                  id="apple"
                  value="apple"
                  className="text-purple-700 mr-3"
                />
                <label htmlFor="apple">Apple</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="brand"
                  id="mi"
                  value="mi"
                  className="text-purple-700 mr-3"
                />
                <label htmlFor="mi">Mi</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="brand"
                  id="samsung"
                  value="samsung"
                  className="text-purple-700 mr-3"
                />
                <label htmlFor="samsung">Samsung</label>
              </div> */}
            </div>
            <hr className="border-purple-700" />
            <div className="price my-10">
              <div>
                <RangeSlider
                  color="violet"
                  size="lg"
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
            </div>
            <hr className="border-purple-700" />
            <div className="ram my-5">
              <label
                className="block mb-2 md:text-2xl text-lg font-bold text-gray-900 dark:text-white"
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
              {/* <div>
                <input
                  type="checkbox"
                  name="ram"
                  id="2"
                  value="2"
                  className="text-purple-700 mr-3"
                />
                <label htmlFor="2">2 GB</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="ram"
                  id="4"
                  value="4"
                  className="text-purple-700 mr-3"
                />
                <label htmlFor="4">4 GB</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="ram"
                  id="8"
                  value="8"
                  className="text-purple-700 mr-3"
                />
                <label htmlFor="8">8 GB</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="ram"
                  id="12"
                  value="12"
                  className="text-purple-700 mr-3"
                />
                <label htmlFor="12">12 GB</label>
              </div> */}
            </div>
            <hr className="border-purple-700" />
            <div className="storage my-5">
              <label
                className="block mb-2 md:text-2xl text-lg font-bold text-gray-900 dark:text-white"
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
              {/* <div>
                <input
                  type="checkbox"
                  name="ram"
                  id="16"
                  value="16"
                  className="text-purple-700 mr-3 inputlable"
                />
                <label htmlFor="16">16 GB</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="ram"
                  id="32"
                  value="32"
                  className="text-purple-700 mr-3"
                />
                <label htmlFor="32">32 GB</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="ram"
                  id="64"
                  value="64"
                  className="text-purple-700 mr-3"
                />
                <label htmlFor="64">64 GB</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="ram"
                  id="128"
                  value="128"
                  className="text-purple-700 mr-3"
                />
                <label htmlFor="128">128 GB</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="ram"
                  id="256"
                  value="256"
                  className="text-purple-700 mr-3"
                />
                <label htmlFor="256">256 GB</label>
              </div> */}
            </div>
          </div>
          <div className="main flex justify-center my-9 flex-wrap gap-2">
            {phoneInfo.map((x, n) => (
              <div className="">
                <Phone data={x} info="Buy Phone" />
                {/* <Card imgSrc={x.img} className="p-4">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {x.name}
                  </h5>
                  <div>
                    <ul className="font-medium list-disc">
                      {x.info.map((i, n) => (
                        <li key={n}>{i}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                  {x.value.map((i) => (
                    <button
                      className="mx-4 my-4 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                      onClick={(e) => setPrice(e.target.value)}
                      value={i.price}
                    >
                      {i.for}
                    </button>
                  ))}
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-red-600">
                      ₹ {x.value[0].price}
                    </h1>
                    <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                  </div>
                  <div>
                    <button
                      value={x.name}
                      onClick={(e) => buyphone(e.target.value)}
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                    >
                      Buy
                      <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                    </button>
                  </div>
                </Card> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buyphone;
