import React from "react";
import mi from "../assets/Mi10.jpg";

const PhoneCard = (props: any) => {
  return (
    <div>
      <div className="container mx-auto pt-10">
        <h2 className="text-3xl">{props.name}</h2>
        <div className="mt-10 flex gap-10">
          {props.phones.map((x: any) => (
            <div className="flex justify-center">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                  <img className="rounded-t-lg mx-auto" src={x.img} alt="" />
                </a>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    {x.name}
                  </h5>
                  <h6 className="text-gray-700 text-base mb-4">
                    ₹ {x.value[0].price}
                  </h6>
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="flex justify-center">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                  <img className="rounded-t-lg mx-auto" src={mi} />
                </a>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    Mi 10
                  </h5>
                  <p className="text-gray-700 text-base mb-4">₹20,000</p>
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                  <img className="rounded-t-lg mx-auto" src={mi} alt="" />
                </a>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    Mi 10
                  </h5>
                  <h6 className="text-gray-700 text-base mb-4">₹20,000</h6>
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                  <img className="rounded-t-lg mx-auto" src={mi} alt="" />
                </a>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    Mi 10
                  </h5>
                  <h6 className="text-gray-700 text-base mb-4">₹20,000</h6>
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                  <img className="rounded-t-lg mx-auto" src={mi} alt="" />
                </a>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    Mi 10
                  </h5>
                  <h6 className="text-gray-700 text-base mb-4">₹20,000</h6>
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Button
                  </button>
                </div>
              </div>
            </div> */}
          <div className="mt-auto">
            <a href="\">view all</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
