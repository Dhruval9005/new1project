import React, { useState, useEffect } from "react";

export const Card = (props: any) => {
  let [price, setPrice] = useState("");
  return (
    <div>
      <div>
        <img
          className="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg m-4"
          src={props.phoneinfo.img}
          alt=""
        />
        <div className="p-6 flex flex-col justify-between">
          <div className="justify-start">
            <h1 className="text-gray-900 font-bold mb-2 text-2xl">
              {props.phoneinfo.name}
            </h1>
            <ul className="font-medium list-disc">
              {props.phoneinfo.info.map((i) => (
                <li>{i}</li>
              ))}
            </ul>
          </div>
          <div>
            {props.phoneinfo.value.map((i) => (
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
                  // onClick={}
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                >
                  Get Exact Value
                  <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                </button>
              ) : (
                <button className="cursor-not-allowed w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                  Get Exact Value
                  <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};