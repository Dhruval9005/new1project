import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Buyphoneinfo = () => {
  let navigate = useNavigate();
  let [price, setPrice] = useState("");
  let [phoneInfo, setPhoneinfo] = useState();
  let { model } = useParams();

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
    name: model,
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
    <div className="buyphoneinfo">
      <div className="container w-full mx-auto">
        <h1 className="text-4xl mt-6">
          Buy Old
          <span className="text-purple-700"> {phoneinfo.name}</span>
        </h1>
        <div className="w-3/4 flex flex-col md:flex-row mx-auto shadow-lg my-52">
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
            <div>
              {phoneinfo.value.map((i) => (
                <button
                  className="mx-4 my-4 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                  onClick={(e) => setPrice(e.target.value)}
                  value={i.price}
                >
                  {i.for}
                </button>
              ))}
            </div>
            <div className="py-3 px-6 border-t border-gray-300 text-gray-600 flex justify-between">
              <div>
                {price ? (
                  <p className="text-2xl font-bold">₹{price}</p>
                ) : (
                  <p className="text-xs font-medium">Choose a variant</p>
                )}
              </div>
              <div>
                {price ? (
                  <button
                    onClick={next}
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                  >
                    Buy
                    <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                  </button>
                ) : (
                  <button className="cursor-not-allowed w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                    Buy
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

export default Buyphoneinfo;
