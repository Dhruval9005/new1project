import { useState } from "react";
import Banner from "../../Components/Banner";
import PhoneCard from "../../Components/PhoneCard";
import Navbutton from "../../Components/Navbutton";
import Phoneinfo from "../../Components/Phoneinfo";

const Home = () => {
  let [banner, setBanner] = useState([
    "https://flowbite.com/docs/images/carousel/carousel-1.svg",
    "https://flowbite.com/docs/images/carousel/carousel-2.svg",
    "https://flowbite.com/docs/images/carousel/carousel-3.svg",
    "https://flowbite.com/docs/images/carousel/carousel-4.svg",
    "https://flowbite.com/docs/images/carousel/carousel-5.svg",
  ]);
  let [banner2, setBanner2] = useState([
    "https://flowbite.com/docs/images/carousel/carousel-1.svg",
    "https://flowbite.com/docs/images/carousel/carousel-3.svg",
    "https://flowbite.com/docs/images/carousel/carousel-5.svg",
    "https://flowbite.com/docs/images/carousel/carousel-4.svg",
    "https://flowbite.com/docs/images/carousel/carousel-2.svg",
  ]);
  let phoneInfo = [
    {
      name: "Xiaomi 12 Pro",
      img: "https://m.media-amazon.com/images/I/31UhwG+XTJL._SY300_SX300_.jpg",
      brand: "mi",
      link: "/Xiami 13",
      info: [
        "108MP Quad Camera + OIS",
        "Qualcomm® Snapdragon™ 865",
        "16.94cm (6.67) 3D Curved E3 AMOLED Display",
      ],
      value: [
        { for: "128 GB", price: 55999 },
        { for: "246 GB", price: 5000 },
      ],
    },
    {
      name: "realme narzo 50",
      img: "https://m.media-amazon.com/images/I/81gRC3KTeaL._SX679_.jpg",
      brand: "mi",
      link: "/Xiami 13",
      info: [
        "108MP Quad Camera + OIS",
        "Qualcomm® Snapdragon™ 865",
        "16.94cm (6.67) 3D Curved E3 AMOLED Display",
      ],
      value: [
        { for: "128 GB", price: 12999 },
        { for: "246 GB", price: 15000 },
      ],
    },
    {
      name: "OnePlus 11 5G",
      img: "https://m.media-amazon.com/images/I/414+xRBltFL._SY300_SX300_.jpg",
      brand: "OnePlus",
      link: "/Xiami 13",
      info: [
        "108MP Quad Camera + OIS",
        "Qualcomm® Snapdragon™ 865",
        "16.94cm (6.67) 3D Curved E3 AMOLED Display",
      ],
      value: [
        { for: "128 GB", price: 56999 },
        { for: "246 GB", price: 59999 },
      ],
    },
    {
      name: "samsung s23",
      img: "https://m.media-amazon.com/images/I/61bM8Mojf6L._SX679_.jpg",
      brand: "samsung",
      link: "/samsung s23",
      info: [
        "108MP Quad Camera + OIS",
        "Qualcomm® Snapdragon™ 865",
        "16.94cm (6.67) 3D Curved E3 AMOLED Display",
      ],
      value: [
        { for: "128 GB", price: 94999 },
        { for: "246 GB", price: 17000 },
      ],
    },
    {
      name: "SAMSUNG Galaxy Z",
      img: "https://m.media-amazon.com/images/I/41qW6++dNmL.jpg",
      brand: "samsung",
      link: "/Xiami 13",
      info: [
        "108MP Quad Camera + OIS",
        "Qualcomm® Snapdragon™ 865",
        "16.94cm (6.67) 3D Curved E3 AMOLED Display",
      ],
      value: [
        { for: "128 GB", price: 49490 },
        { for: "246 GB", price: 35000 },
      ],
    },
    {
      name: "Xiaomi 13",
      img: "https://m.media-amazon.com/images/I/71zDl128yGL._SX679_.jpg",
      brand: "mi",
      link: "/Xiami 13",
      info: [
        "108MP Quad Camera + OIS",
        "Qualcomm® Snapdragon™ 865",
        "16.94cm (6.67) 3D Curved E3 AMOLED Display",
      ],
      value: [
        { for: "128 GB", price: 99999 },
        { for: "246 GB", price: 5000 },
      ],
    },
    {
      name: "Xiaomi 13",
      img: "https://m.media-amazon.com/images/I/41kg-+XWoxL._SY300_SX300_.jpg",
      link: "/Xiami 13",
      brand: "mi",
      info: [
        "108MP Quad Camera + OIS",
        "Qualcomm® Snapdragon™ 865",
        "16.94cm (6.67) 3D Curved E3 AMOLED Display",
      ],
      value: [
        { for: "128 GB", price: 11000 },
        { for: "246 GB", price: 15000 },
      ],
    },
    {
      name: "iQOO 11 5G",
      img: "https://m.media-amazon.com/images/I/71ZeuCAbcSL._SX679_.jpg",
      brand: "apple",
      link: "/Xiami 13",
      info: [
        "108MP Quad Camera + OIS",
        "Qualcomm® Snapdragon™ 865",
        "16.94cm (6.67) 3D Curved E3 AMOLED Display",
      ],
      value: [
        { for: "128 GB", price: 59999 },
        { for: "246 GB", price: 27000 },
      ],
    },
    {
      name: "Tecno Phantom X2 5G",
      img: "https://m.media-amazon.com/images/I/61k7BDoL7dL._SX679_.jpg",
      brand: "samsung",
      link: "/Xiami 13",
      info: [
        "108MP Quad Camera + OIS",
        "Qualcomm® Snapdragon™ 865",
        "16.94cm (6.67) 3D Curved E3 AMOLED Display",
      ],
      value: [
        { for: "128 GB", price: 39999 },
        { for: "246 GB", price: 17000 },
      ],
    },
    {
      name: "iQOO 9 SE 5G",
      img: "https://m.media-amazon.com/images/I/618gFHEnXUL._SX679_.jpg",
      brand: "samsung",
      link: "/Xiami 13",
      info: [
        "108MP Quad Camera + OIS",
        "Qualcomm® Snapdragon™ 865",
        "16.94cm (6.67) 3D Curved E3 AMOLED Display",
      ],
      value: [
        { for: "128 GB", price: 30999 },
        { for: "246 GB", price: 35000 },
      ],
    },
    {
      name: "iQOO 9 Pro 5G",
      img: "https://m.media-amazon.com/images/I/616FcX9aiEL._SX679_.jpg",
      brand: "mi",
      link: "/Xiami 13",
      info: [
        "108MP Quad Camera + OIS",
        "Qualcomm® Snapdragon™ 865",
        "16.94cm (6.67) 3D Curved E3 AMOLED Display",
      ],
      value: [
        { for: "128 GB", price: 57990 },
        { for: "246 GB", price: 5000 },
      ],
    },
  ];
  let brand = [
    {
      img: "https://s3n.cashify.in/cashify/brand/img/xhdpi/2e7cdc22-5a5f.jpg",
      link: "/apple",
    },
    {
      img: "https://s3n.cashify.in/cashify/brand/img/xhdpi/cb96df6e-080f.jpg",
      link: "/mi",
    },
    {
      img: "https://s3n.cashify.in/cashify/brand/img/xhdpi/406a512d-e8dd.jpg",
      link: "/samsung",
    },
    {
      img: "https://s3n.cashify.in/cashify/brand/img/xhdpi/dacc50a2-77a9.jpg",
      link: "/google",
    },
  ];

  return (
    <div className="Home h-fit mb-28">
      <Banner banner={banner} />
      <Navbutton />
      <Banner banner={banner2} />
      <div className="ml-3">
        <PhoneCard name="Most Search" phones={phoneInfo} path="/buy" />
        <PhoneCard name="Latest Phone" phones={phoneInfo} path="/buy" />
        <PhoneCard name="UpComing Phone" phones={phoneInfo} path="/buy" />
        <PhoneCard name="Xiaomi" phones={phoneInfo} path="/buy" />
        <div className="container mx-auto pt-10">
          <h2 className="text-3xl">Brand</h2>
          <div className="mt-10 flex gap-10 overflow-y-auto">
            {brand.map((x, n) => (
              <div key={n} className="flex justify-center p-3">
                <div className="rounded-lg shadow-lg bg-white w-40 h-40">
                  <a href={x.link}>
                    <button className="w-40 h-36 text-center">
                      <img
                        className="rounded-t-lg mx-auto w-40 h-40"
                        src={x.img}
                        alt=""
                      />
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container mx-auto pt-28 h-fit">
          <Phoneinfo />
        </div>
      </div>
    </div>
  );
};

export default Home;
