import React, { useState } from "react";
// import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import mi from "../../assets/Mi10.jpg";
import {
  // IconGasStation,
  // IconGauge,
  // IconManualGearbox,
  IconUsers,
  // IconCamera,
  // TablerIcon,
} from "@tabler/icons";
import { Phone } from "../../Components/Phone";

const Bidding = () => {
  let naviget = useNavigate();
  let [phoneInfo, setPhoneinfo] = useState([
    {
      name: "Mi 10",
      img: mi,
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
      img: mi,
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
      img: mi,
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
      img: mi,
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
      img: mi,
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

  function badding(phone: string) {
    naviget(`${window.location.pathname}/${phone}`);
  }

  return (
    <div className="bedding h-fit md:mt-20 mb-28">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col">
          <div className="main flex justify-center my-9 flex-wrap">
            {phoneInfo.map((x) => (
              <div className="m-4">
                <Phone data={x} info="Bid on phone"/>
                {/* <Card imgSrc={x.img} className="p-4">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {x.name}
                  </h5>
                  <div>
                    <ul className="font-medium list-disc">
                      {x.info.map((i) => (
                        <li>{i}</li>
                      ))}
                    </ul>
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
                      onClick={(e) => badding(x.name)}
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                    >
                      Bid on {x.name}
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

export default Bidding;
