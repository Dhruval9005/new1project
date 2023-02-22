import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Accordion } from "@mantine/core";
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
import Filters from "../../Components/Filters";

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

  function Price() {
    phoneInfo = phoneInfo.filter((croElm) => {
      console.log(phoneInfo);

      return croElm.value[0].price >= rangeValue[0];
    });
  }

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
            <Filters />
          </div>
          <div className="md:hidden block">
            <Accordion variant="separated" radius="md">
              <Accordion.Item value="customization">
                <Accordion.Control>Filter</Accordion.Control>
                <Accordion.Panel>
                  <Filters />
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
