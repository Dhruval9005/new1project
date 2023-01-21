import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Biddingphone = () => {
  let navigate = useNavigate();
  let [price, setPrice] = useState("");
  let [phoneInfo, setPhoneinfo] = useState();
  let { id } = useParams();

  useEffect(() => {
    getPhoneInfo();
  }, []);

  async function getPhoneInfo() {
    // let response = await axios.get("");
    // setPhoneinfo(response.data.data);
  }

  function next() {
    navigate(`${window.location.pathname}/cart`);
  }

  const phoneinfo = {
    name: id,
    img: "../public/Mi10.jpg",
    info: [
      "108MP Quad Camera + OIS",
      "Qualcomm® Snapdragon™ 865",
      "16.94cm (6.67) 3D Curved E3 AMOLED Display",
      "LiquidCool 2.0 Vapor Chamber + 6 Stack Graphite + Graphene Cooling System",
      "LPDDR5 RAM + UFS 3.0 Storage",
      "30W Wireless Charging + 10W Reverse Charging",
    ],
    value: [
      { for: "128 Gb", price: "21,000" },
      { for: "246 Gb", price: "25,000" },
    ],
  };

  return (
    <div className="biddingphone h-fit md:mt-28 mb-28">
      <div className="container w-full mx-auto">
        <h1 className="text-4xl mt-6 ml-3 ">
          Bid on
          <span className="text-purple-700"> {phoneinfo.name}</span>
        </h1>
        <div className="md:w-fit flex flex-col md:flex-row mx-auto shadow-lg my-20">
          <img
            className="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg m-4"
            src={phoneinfo.img}
            alt=""
          />
          <div className="p-6 flex flex-col justify-between">
            <div className="justify-start">
              <h1 className="text-gray-900 font-bold mb-2 text-2xl">
                {phoneinfo.name}
              </h1>
              <ul className="font-medium list-disc">
                {phoneinfo.info.map((i) => (
                  <li>{i}</li>
                ))}
              </ul>
            </div>
            <div className="py-3 px-6 border-t border-gray-300 text-gray-600 flex justify-between">
              <div>
                <p className="text-2xl font-bold">
                  ₹{phoneinfo.value[0].price}
                </p>
              </div>
              <div>
                <input
                  type="number"
                  className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                  placeholder="Make a your bid"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div>
                {price ? (
                  <button
                    onClick={next}
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                  >
                    Place a bid
                    <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                  </button>
                ) : (
                  <button className="cursor-not-allowed w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                    Place a bid
                    <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biddingphone;
