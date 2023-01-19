import React, { useState } from "react";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import xiaomi from "../../assets/Mi10.jpg";

const Bidding = () => {
  let naviget = useNavigate();
  let [phoneInfo, setPhoneinfo] = useState([
    {
      name: "Xiaomi 13",
      img: xiaomi,
      grand: "mi",
      info: [
        "108MP Quad Camera + OIS",
        "Qualcomm® Snapdragon™ 865",
        "16.94cm (6.67) 3D Curved E3 AMOLED Display",
      ],
      value: [
        { for: "128 GB", price: "21000" },
        { for: "246 GB", price: "25000" },
      ],
    },
    {
      name: "Xiaomi 13",
      img: xiaomi,
      grand: "mi",
      info: [
        "108MP Quad Camera + OIS",
        "Qualcomm® Snapdragon™ 865",
        "16.94cm (6.67) 3D Curved E3 AMOLED Display",
      ],
      value: [
        { for: "128 GB", price: "21,000" },
        { for: "246 GB", price: "25,000" },
      ],
    },
    {
      name: "iphone 14",
      img: xiaomi,
      grand: "apple",
      info: [
        "108MP Quad Camera + OIS",
        "Qualcomm® Snapdragon™ 865",
        "16.94cm (6.67) 3D Curved E3 AMOLED Display",
      ],
      value: [
        { for: "128 GB", price: "21,000" },
        { for: "246 GB", price: "25,000" },
      ],
    },
    {
      name: "samsung s22",
      img: xiaomi,
      grand: "samsung",
      info: [
        "108MP Quad Camera + OIS",
        "Qualcomm® Snapdragon™ 865",
        "16.94cm (6.67) 3D Curved E3 AMOLED Display",
      ],
      value: [
        { for: "128 GB", price: "21,000" },
        { for: "246 GB", price: "25,000" },
      ],
    },
    {
      name: "samsung s20",
      img: xiaomi,
      grand: "samsung",
      info: [
        "108MP Quad Camera + OIS",
        "Qualcomm® Snapdragon™ 865",
        "16.94cm (6.67) 3D Curved E3 AMOLED Display",
      ],
      value: [
        { for: "128 GB", price: "21,000" },
        { for: "246 GB", price: "25,000" },
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
                <Card imgSrc={x.img} className="p-4">
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
                      onClick={(e) => badding(e.target.value)}
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                    >
                      Bid on {x.name}
                      <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                    </button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bidding;
