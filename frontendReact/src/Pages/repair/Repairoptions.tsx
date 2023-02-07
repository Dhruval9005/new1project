import axios from "axios";
import { useState, useEffect } from "react";

const Repairoptions = () => {
  let [phoneInfo, setPoneinfo] = useState({});
  let [Screen, setScreen] = useState("");
  let [Battery, setBattery] = useState("");
  let [Charging, setCharging] = useState("");
  let [Aux, setAux] = useState("");
  let [price, setprice] = useState(Number);

  useEffect(() => {
    getPhoneinfo();
  }, [phoneInfo]);

  async function getPhoneinfo() {
    let phoneInfo = await axios.get("");
    setPoneinfo(phoneInfo.data.data);
  }

  function SCREEN(checked: boolean) {
    if (checked) {
      setScreen("true");
      setprice(price + 6799);
    } else {
      setScreen("false");
      setprice(price - 6799);
    }
  }

  function BATTERY(checked: boolean) {
    if (checked) {
      setBattery("true");
      setprice(price + 1599);
    } else {
      setBattery("false");
      setprice(price - 1599);
    }
  }

  function CHARGING(checked: boolean) {
    if (checked) {
      setCharging("true");
      setprice(price + 1599);
    } else {
      setCharging("false");
      setprice(price - 1599);
    }
  }

  function AUX(checked: boolean) {
    if (checked) {
      setAux("true");
      setprice(price + 1099);
    } else {
      setAux("false");
      setprice(price - 1099);
    }
  }

  let phoneinfo = {
    name: "Xiaomi 10",
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
    <div className="repairoptions h-fit md:mt-28 mb-28">
      <div className="md:container w-full mx-auto">
        <div className="w-3/4 my-6 flex flex-col md:flex-col mx-auto shadow-lg">
          <div className="p-6  justify-between">
            <div className="flex flex-col lg:flex-row justify-between content-center">
              <div>
                <img
                  className="w-36 h-36 max-h-full md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg m-4 mx-auto"
                  src={phoneinfo.img}
                  alt=""
                />
                <h1 className="text-gray-900 font-bold mb-2 flex flex-col text-2xl text-center w-52 justify-center mx-auto">
                  {phoneinfo.name}
                </h1>
              </div>
              <h1 className="text-gray-900 font-bold mb-2 flex flex-col text-2xl text-center justify-center content-end md:w-96 w-full">
                Price Summary <br />₹ {price}
              </h1>
            </div>
          </div>
          <div className="mt-4 text-center flex flex-col content-center">
            <h3 className="mb-5 text-2xl font-bold text-gray-900 dark:text-white pl-10 text-start">
              Pick Your Repair Service
            </h3>
            <ul className="grid w-full gap-6 lg:grid-cols-4 justify-items-center">
              <li className="w-48">
                <input
                  type="checkbox"
                  id="screen"
                  name="screen"
                  onChange={(e) => SCREEN(e.target.checked)}
                  className="hidden peer"
                />
                <label
                  htmlFor="screen"
                  className="inline-flex items-center justify-between w-full text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-purple-500 peer-checked:border-purple-600 peer-checked:text-purple-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="m-4 w-full h-36 text-center">
                    <img
                      className="w-16 mx-auto mb-2"
                      src="https://cshprod.s3.amazonaws.com/imageLibrary/Mask_Group_135_f84f5361531b.png"
                      alt=""
                    />
                    <hr className="w-full mb-4" />
                    <div className="w-full text-lg font-semibold text-center">
                      SCREEN
                    </div>
                    <div className="w-full font-bold text-2xl text-purple-600">
                      ₹6,799
                    </div>
                  </div>
                </label>
              </li>
              <li className="w-48">
                <input
                  type="checkbox"
                  id="Battery"
                  name="Battery"
                  onChange={(e) => BATTERY(e.target.checked)}
                  className="hidden peer"
                />
                <label
                  htmlFor="Battery"
                  className="inline-flex items-center justify-between w-full text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-purple-500 peer-checked:border-purple-600 peer-checked:text-purple-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="m-4 w-full h-36 text-center">
                    <img
                      className="w-16 mx-auto mb-2"
                      src="https://cshprod.s3.amazonaws.com/imageLibrary/Mask_Group_137_5d508ad10928.png"
                      alt=""
                    />
                    <hr className="w-full mb-4" />
                    <div className="w-full text-lg font-semibold text-center">
                      BATTERY
                    </div>
                    <div className="w-full font-bold text-2xl text-purple-600">
                      ₹1,599
                    </div>
                  </div>
                </label>
              </li>
              <li className="w-48">
                <input
                  type="checkbox"
                  id="Charging"
                  name="Charging"
                  onChange={(e) => CHARGING(e.target.checked)}
                  className="hidden peer"
                />
                <label
                  htmlFor="Charging"
                  className="inline-flex items-center justify-between w-full text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-purple-500 peer-checked:border-purple-600 peer-checked:text-purple-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="m-4 w-full h-36 text-center">
                    <img
                      className="w-16 mx-auto mb-2"
                      src="https://cshprod.s3.amazonaws.com/imageLibrary/Mask_Group_138_4604c5485357.png"
                      alt=""
                    />
                    <hr className="w-full mb-4" />
                    <div className="w-full text-lg font-semibold text-center">
                      CHARGING JACK
                    </div>
                    <div className="w-full font-bold text-2xl text-purple-600">
                      ₹1,599
                    </div>
                  </div>
                </label>
              </li>
              <li className="w-48">
                <input
                  type="checkbox"
                  id="Aux"
                  name="Aux"
                  onChange={(e) => AUX(e.target.checked)}
                  className="hidden peer"
                />
                <label
                  htmlFor="Aux"
                  className="inline-flex items-center justify-between w-full text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-purple-500 peer-checked:border-purple-600 peer-checked:text-purple-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="m-4 w-full h-36 text-center">
                    <img
                      className="w-16 mx-auto mb-2"
                      src="https://cshprod.s3.amazonaws.com/imageLibrary/mask-group-1512x_f3bb15ce6426.png"
                      alt=""
                    />
                    <hr className="w-full mb-4" />
                    <div className="w-full text-lg font-semibold text-center">
                      AUX JACK
                    </div>
                    <div className="w-full font-bold text-2xl text-purple-600">
                      ₹1,099
                    </div>
                  </div>
                </label>
              </li>
            </ul>
          </div>
          <div className="mt-10 mb-7 px-10">
            <button
              // onClick={sendphoneinfo}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repairoptions;
