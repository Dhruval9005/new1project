import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import mi from "../../assets/Mi10.jpg";
import { Phone } from "../../Components/Phone";
import {
  IconGasStation,
  IconGauge,
  IconManualGearbox,
  IconUsers,
  IconCamera,
  TablerIcon,
} from "@tabler/icons";

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
        { for: "128 Gb", price: 21000 },
        { for: "246 Gb", price: 25000 },
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
        { for: "128 Gb", price: 21000 },
        { for: "246 Gb", price: 25000 },
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
        { for: "128 Gb", price: 21000 },
        { for: "246 Gb", price: 25000 },
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
        { for: "128 Gb", price: 21000 },
        { for: "246 Gb", price: 25000 },
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
        { for: "128 Gb", price: 21000 },
        { for: "246 Gb", price: 25000 },
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
              <div key={x.name} className="m-4">
                <Phone data={x} info="Bid on phone" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bidding;
