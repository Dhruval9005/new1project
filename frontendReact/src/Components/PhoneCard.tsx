import React from "react";
import mi from "../assets/Mi10.jpg";

const PhoneCard = ({ name, phones, path }: any) => {
  return (
    <div className="container mx-auto pt-10">
      <h2 className="text-3xl">{name}</h2>
      <div className="mt-10 flex gap-10 overflow-y-auto">
        {phones.map((x: any) => (
          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white w-60">
              <a href={path + x.link}>
                <img className="rounded-t-lg mx-auto" src={x.img} alt="" />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  {x.name}
                </h5>
                <h6 className="text-gray-700 text-base mb-4"></h6>
                <h6 className="text-gray-700 text-base mb-4">
                  ₹ {x.value[0].price}
                </h6>
                <a
                  href={path + x.link}
                  className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Buy
                </a>
              </div>
            </div>
          </div>
        ))}
        <div className="md:w-14 mt-auto underline text-purple-700">
          <a href="\">view all</a>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
