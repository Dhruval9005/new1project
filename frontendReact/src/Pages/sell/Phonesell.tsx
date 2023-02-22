import React from "react";
import { SellPhone } from "../../Components/SellPhone";
import { IconUsers } from "@tabler/icons";
import mi from "../../assets/Mi10.jpg";
const Phonesell = () => {
  const phoneinfo = {
    name: "Mi 10",
    img: mi,
    brand: "Mi",
    info: [
      { label: "108MP Quad Camera + OIS", icon: IconUsers },
      { label: "Qualcomm® Snapdragon™ 865", icon: IconUsers },
      { label: "16.94cm (6.67) 3D Curved E3 AMOLED Display", icon: IconUsers },
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
  };
  return (
    <div className="sell h-screen">
      <div className="md:container mx-auto">
        <div className="relative flex flex-col min-h-full justify-center">
          <div className="w-full p-6 m-auto lg:max-w-4xl flex flex-col">
            <div className="mt-4 text-center">
              <h3 className="mb-5 md:text-3xl text-sm font-medium text-gray-900 dark:text-white">
                Final Price
              </h3>
              <div className="w-fit mx-auto">
                <SellPhone data={phoneinfo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phonesell;
