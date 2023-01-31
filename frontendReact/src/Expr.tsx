import React, { useState } from "react";
import mi from "./assets/Mi10.jpg";
import Select from "react-select";

const Expr = () => {
  const [rangeValue, setRangeValue] = useState<[number, number]>([20, 80]);
  let [firstPhone, setFirstPhone] = useState({});
  let [secondPhone, setSecondPhone] = useState({});
  const phoneinfo = {
    name: "Xiaomi Mi 10 Ultra",
    img: mi,
    info: [
      {
        name: "Rear Camera",
        data: "108-megapixel + 13-megapixel + 2-megapixel + 2-megapixel",
      },
      { name: "Front Camera", data: "20-megapixel" },
      { name: "Processor", data: "Qualcomm Snapdragon 865" },
      {
        name: "Display",
        data: "16.94cm (6.67) 3D Curved E3 AMOLED Display",
      },
      { name: "Storage", data: "LPDDR5 RAM + UFS 3.0 Storage" },
    ],
    value: [
      { for: "128 Gb", price: "21,000" },
      { for: "246 Gb", price: "25,000" },
    ],
  };

  return (
    <div className="expr">
      <div className="container w-full mx-auto">
        <div className="md:w-fit w-full flex flex-col md:flex-row mx-auto shadow-lg md:my-40">
          <div className="flex gap-3">
            <div className="w-96">
              <Select
                className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                classNamePrefix="select Brand"
                isClearable={true}
                isSearchable={true}
                name="brand"
                // options={brand}
                // onChange={(e) => console.log(e?.label)}
              />
              {firstPhone && (
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
                    {phoneinfo.info.map((x) => (
                      <div className="form__group py-3 px-6 border-t border-gray-300 text-gray-600 pt-7">
                        {x.data}
                        <label htmlFor="name" className="form__label">
                          {x.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="w-96">
              <Select
                className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                classNamePrefix="select Brand"
                isClearable={true}
                isSearchable={true}
                name="brand"
                // options={brand}
                // onChange={(e) => console.log(e?.label)}
              />
              {secondPhone && (
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
                    {phoneinfo.info.map((x) => (
                      <div className="form__group py-3 px-6 border-t border-gray-300 text-gray-600 pt-7">
                        {x.data}
                        <label htmlFor="name" className="form__label">
                          {x.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expr;
