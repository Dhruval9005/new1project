import React, { useState } from "react";
import mi from "./assets/Mi10.jpg";
import Select from "react-select";
import { RangeSlider } from "@mantine/core";

const Expr = () => {
  const [rangeValue, setRangeValue] = useState<[number, number]>([20, 80]);
  const phoneinfo = {
    name: "Xiaomi Mi 10 Ultra",
    img: mi,
    info: {
      RearCamera: "108-megapixel + 13-megapixel + 2-megapixel + 2-megapixel",
      FrontCamera: "20-megapixel",
      Processor: "Qualcomm Snapdragon 865",
      Display: "16.94cm (6.67) 3D Curved E3 AMOLED Display",
      storage: "LPDDR5 RAM + UFS 3.0 Storage",
    },
    value: [
      { for: "128 Gb", price: "21,000" },
      { for: "246 Gb", price: "25,000" },
    ],
  };

  return (
    <div className="expr">
      <div className="container w-full mx-auto">
        <div className="md:w-fit w-full flex flex-col md:flex-row mx-auto shadow-lg md:my-40">
          <div className="flex">
            <div className="">
              {/* <RangeSlider
                color="violet"
                size="lg"
                radius="lg"
                showLabelOnHover={false}
                labelAlwaysOn
                marks={[  
                  { value: 20, label: "20%" },
                  { value: 50, label: "50%" },
                  { value: 80, label: "80%" },
                ]}
                value={rangeValue}
                onChange={setRangeValue}
              /> */}
            </div>
            <div className="">
              <Select
                className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                classNamePrefix="select Brand"
                isClearable={true}
                isSearchable={true}
                name="brand"
                // options={brand}
                // onChange={(e) => console.log(e?.label)}
              />
              <div className="flex justify-center">
                <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
                  <div className="py-3 px-6 border-b border-gray-300 w-fit mx-auto">
                    <a className="w-fit mx-auto" href="#">
                      <img className="rounded-t-lg" src={phoneinfo.img} />
                    </a>
                  </div>
                  <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">
                      {phoneinfo.name}
                    </h5>
                  </div>
                  <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                    <label className="" htmlFor="">
                      Processor
                    </label>
                    {phoneinfo.info.Processor}
                  </div>
                  <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                    <label className="" htmlFor="">
                      Display
                    </label>
                    {phoneinfo.info.Display}
                  </div>
                  <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                    <label className="" htmlFor="">
                      Rear Camera
                    </label>
                    {phoneinfo.info.RearCamera}
                  </div>
                  <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                    <label className="" htmlFor="">
                      Front Camera
                    </label>
                    20-megapixel
                  </div>
                  <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                    <label className="" htmlFor="">
                      Resolution
                    </label>
                    1080x2340 pixels
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <Select
                className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                classNamePrefix="select Brand"
                isClearable={true}
                isSearchable={true}
                name="brand"
                // options={brand}
                // onChange={(e) => console.log(e?.label)}
              />
              <div className="flex justify-center">
                <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
                  <div className="py-3 px-6 border-b border-gray-300 w-fit mx-auto">
                    <a className="w-fit mx-auto" href="#">
                      <img className="rounded-t-lg" src={phoneinfo.img} />
                    </a>
                  </div>
                  <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">
                      {phoneinfo.name}
                    </h5>
                  </div>
                  <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                    <label className="" htmlFor="">
                      Processor
                    </label>
                    {phoneinfo.info.Processor}
                  </div>
                  <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                    <label className="" htmlFor="">
                      Display
                    </label>
                    {phoneinfo.info.Display}
                  </div>
                  <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                    <label className="" htmlFor="">
                      Rear Camera
                    </label>
                    {phoneinfo.info.RearCamera}
                  </div>
                  <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                    <label className="" htmlFor="">
                      Front Camera
                    </label>
                    20-megapixel
                  </div>
                  <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                    <label className="" htmlFor="">
                      Resolution
                    </label>
                    1080x2340 pixels
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expr;
