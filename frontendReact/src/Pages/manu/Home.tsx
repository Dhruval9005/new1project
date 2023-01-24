import { Carousel } from "flowbite-react";
import React, { useState } from "react";

import buying from "../../assets/buying.png";
import commerce from "../../assets/commerce.png";
import repairing from "../../assets/repairing.png";
import visit from "../../assets/visit.png";
import bidding from "../../assets/auction.png";
import mi from "../../assets/Mi10.jpg";
import PhoneCard from "../../Components/PhoneCard";

const Home = () => {
  let [banner, setBanner] = useState([
    "https://flowbite.com/docs/images/carousel/carousel-1.svg",
    "https://flowbite.com/docs/images/carousel/carousel-2.svg",
    "https://flowbite.com/docs/images/carousel/carousel-3.svg",
    "https://flowbite.com/docs/images/carousel/carousel-4.svg",
    "https://flowbite.com/docs/images/carousel/carousel-5.svg",
  ]);
  let phoneInfo = [
    {
      name: "Xiaomi 13",
      img: mi,
      grand: "mi",
      link: "/Xiami 13",
      info: [
        "108MP Quad Camera + OIS",
        "Qualcomm® Snapdragon™ 865",
        "16.94cm (6.67) 3D Curved E3 AMOLED Display",
      ],
      value: [
        { for: "128 GB", price: "1000" },
        { for: "246 GB", price: "5000" },
      ],
    },
    {
      name: "Xiaomi 13",
      img: mi,
      link: "/Xiami 13",
      grand: "mi",
      info: [
        "108MP Quad Camera + OIS",
        "Qualcomm® Snapdragon™ 865",
        "16.94cm (6.67) 3D Curved E3 AMOLED Display",
      ],
      value: [
        { for: "128 GB", price: "11,000" },
        { for: "246 GB", price: "15,000" },
      ],
    },
    {
      name: "iphone 14",
      img: mi,
      grand: "apple",
      link: "/Xiami 13",
      info: [
        "108MP Quad Camera + OIS",
        "Qualcomm® Snapdragon™ 865",
        "16.94cm (6.67) 3D Curved E3 AMOLED Display",
      ],
      value: [
        { for: "128 GB", price: "25,000" },
        { for: "246 GB", price: "27,000" },
      ],
    },
    {
      name: "samsung s22",
      img: mi,
      grand: "samsung",
      link: "/Xiami 13",
      info: [
        "108MP Quad Camera + OIS",
        "Qualcomm® Snapdragon™ 865",
        "16.94cm (6.67) 3D Curved E3 AMOLED Display",
      ],
      value: [
        { for: "128 GB", price: "15,000" },
        { for: "246 GB", price: "17,000" },
      ],
    },
    {
      name: "samsung s20",
      img: mi,
      grand: "samsung",
      link: "/Xiami 13",
      info: [
        "108MP Quad Camera + OIS",
        "Qualcomm® Snapdragon™ 865",
        "16.94cm (6.67) 3D Curved E3 AMOLED Display",
      ],
      value: [
        { for: "128 GB", price: "30,000" },
        { for: "246 GB", price: "35,000" },
      ],
    },
  ];
  let brand = [
    { img: "https://s3n.cashify.in/cashify/brand/img/xhdpi/2e7cdc22-5a5f.jpg" },
    { img: "https://s3n.cashify.in/cashify/brand/img/xhdpi/cb96df6e-080f.jpg" },
    { img: "https://s3n.cashify.in/cashify/brand/img/xhdpi/406a512d-e8dd.jpg" },
    { img: "https://s3n.cashify.in/cashify/brand/img/xhdpi/dacc50a2-77a9.jpg" },
  ];

  return (
    <div className="Home h-fit mb-28">
      <div className="banner">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel slideInterval={3000}>
            {banner.map((x, n) => (
              <a key={n} href="#">
                <img className="w-full" src={x} />
              </a>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="container mx-auto pt-10 h-fit">
        <div className="flex flex-col justify-center overflow-hidden">
          <div className="w-full p-2 m-auto lg:max-w-4xl">
            <div className="flex flex-col justify-center flex-wrap">
              <div className="link button flex flex-col justify-center content-center flex-wrap max-h-max">
                <div className="mb-10 flex flex-wrap gap-4 justify-center">
                  <a href="/sell" className="">
                    <button className="w-40 h-36 text-center">
                      <img src={commerce} className="w-16 mx-auto mb-2" />
                      <span>Sell Phones</span>
                    </button>
                  </a>
                  <a href="/buy" className="">
                    <button className="w-40 h-36 text-center">
                      <img src={buying} className="w-16 mx-auto mb-2" />
                      <span>Buy Phone</span>
                    </button>
                  </a>
                  <a href="/repair" className="">
                    <button className="w-40 h-36 text-center">
                      <img src={repairing} className="w-16 mx-auto mb-2" />
                      <span>Repair Phone</span>
                    </button>
                  </a>
                  <a href="/store" className="">
                    <button className="w-40 h-36 text-center">
                      <img src={visit} className="w-16 mx-auto mb-2" />
                      <span>Visit Our Store</span>
                    </button>
                  </a>
                </div>
                <div className="flex justify-center">
                  <a href="/bidding" className="">
                    <button className="w-[335px] h-44 text-center">
                      <img src={bidding} className="w-16 mx-auto mb-2" />
                      <span className="text-2xl">Bid on Phone</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner mt-10">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel slideInterval={3000}>
            {banner.map((x, n) => (
              <a key={n} href="#">
                <img className="w-full" src={x} />
              </a>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="ml-3">
        <PhoneCard name="Most Search" phones={phoneInfo} path="/buy" />
        <PhoneCard name="Latest Phone" phones={phoneInfo} path="/buy" />
        <PhoneCard name="UpComing Phone" phones={phoneInfo} path="/buy" />
        <PhoneCard name="Xiaomi" phones={phoneInfo} path="/buy" />
        <div>
          <div className="container mx-auto pt-10">
            <h2 className="text-3xl">Brand</h2>
            <div className="mt-10 flex gap-10 overflow-y-auto">
              {brand.map((x) => (
                <div className="flex justify-center">
                  <div className="rounded-lg shadow-lg bg-white w-40 h-40">
                    <a href="">
                      <img
                        className="rounded-t-lg mx-auto w-40 h-40"
                        src={x.img}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              ))}
              <div className="mt-auto underline text-purple-700 mr-10">
                <a href="\">view all</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
