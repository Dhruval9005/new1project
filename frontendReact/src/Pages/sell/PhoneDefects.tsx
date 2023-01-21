import axios from "axios";
import React, { useState } from "react";

const PhoneDefects = () => {
  let [scratch, setScracth] = useState("");
  let [deadspot, setDeadspot] = useState("");
  let [scratchDent, setScratchDent] = useState("");
  let [missingbroken, setMissingbroken] = useState("");

  function Scracth(checked: boolean) {
    if (checked) {
      setScracth("true");
    } else {
      setScracth("false");
    }
  }

  function Deadspot(checked: boolean) {
    if (checked) {
      setDeadspot("true");
    } else {
      setDeadspot("false");
    }
  }

  function ScratchDent(checked: boolean) {
    if (checked) {
      setScratchDent("true");
    } else {
      setScratchDent("false");
    }
  }

  function Missingbroken(checked: boolean) {
    if (checked) {
      setMissingbroken("true");
    } else {
      setMissingbroken("false");
    }
  }

  async function Senddata() {
    try {
      let res = await axios.post("/", {
        scratch,
        deadspot,
        scratchDent,
        missingbroken,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="phonedefaect h-fit md:mt-28 mb-28">
      <div className="md:container mx-auto">
        <div className="relative flex flex-col min-h-full justify-center">
          <div className="w-full p-6 m-auto lg:max-w-4xl flex flex-col">
            <div className="mt-4 text-center">
              <h3 className="mb-5 md:text-lg text-sm font-medium text-gray-900 dark:text-white">
                Select screen/body defects that are applicable!
              </h3>
              <ul className="grid w-full gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
                <li className="w-48">
                  <input
                    type="checkbox"
                    id="scratch"
                    name="scratch"
                    onChange={(e) => Scracth(e.target.checked)}
                    className="hidden peer"
                  />
                  <label
                    htmlFor="scratch"
                    className="inline-flex items-center justify-between w-full text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-purple-500 peer-checked:border-purple-600 peer-checked:text-purple-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="m-4 w-full h-36 text-center">
                      <img
                        className="w-16 mx-auto mb-2"
                        src="https://s3n.cashify.in/cashify/productLinePartVariation/img/xxhdpi/62a31a9a6c17e.png"
                        alt=""
                      />
                      <hr className="w-full mb-4" />
                      <div className="w-full md:text-lg text-sm font-semibold text-center">
                        Broken/scratch on device screen
                      </div>
                      <div className="w-full"></div>
                    </div>
                  </label>
                </li>
                <li className="w-48">
                  <input
                    type="checkbox"
                    id="Dead-spot"
                    name="Dead-spot"
                    onChange={(e) => Deadspot(e.target.checked)}
                    className="hidden peer"
                  />
                  <label
                    htmlFor="Dead-spot"
                    className="inline-flex items-center justify-between w-full text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-purple-500 peer-checked:border-purple-600 peer-checked:text-purple-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="m-4 w-full h-36 text-center">
                      <img
                        className="w-16 mx-auto mb-2"
                        src="https://s3n.cashify.in/cashify/productLinePartVariation/img/xxhdpi/62a31ad88c473.png"
                        alt=""
                      />
                      <hr className="w-full mb-4" />
                      <div className="w-full md:text-lg text-sm font-semibold text-center">
                        Dead spot/visible lines on screen
                      </div>
                      <div className="w-full"></div>
                    </div>
                  </label>
                </li>
                <li className="w-48">
                  <input
                    type="checkbox"
                    id="Scratch/Dent"
                    name="Scratch/Dent"
                    onChange={(e) => ScratchDent(e.target.checked)}
                    className="hidden peer"
                  />
                  <label
                    htmlFor="Scratch/Dent"
                    className="inline-flex items-center justify-between w-full text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-purple-500 peer-checked:border-purple-600 peer-checked:text-purple-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="m-4 w-full h-36 text-center">
                      <img
                        className="w-16 mx-auto mb-2"
                        src="https://s3n.cashify.in/cashify/productLinePartVariation/img/xxhdpi/62a31b0b3b18d.png"
                        alt=""
                      />
                      <hr className="w-full mb-4" />
                      <div className="w-full md:text-lg text-sm font-semibold text-center">
                        Scratch/Dent on device body
                      </div>
                      <div className="w-full"></div>
                    </div>
                  </label>
                </li>
                <li className="w-48">
                  <input
                    type="checkbox"
                    id="missing/broken"
                    name="missing/broken"
                    onChange={(e) => Missingbroken(e.target.checked)}
                    className="hidden peer"
                  />
                  <label
                    htmlFor="missing/broken"
                    className="inline-flex items-center justify-between w-full text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-purple-500 peer-checked:border-purple-600 peer-checked:text-purple-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="m-4 w-full h-36 text-center">
                      <img
                        className="w-16 mx-auto mb-2"
                        src="https://s3n.cashify.in/cashify/productLinePartVariation/img/xxhdpi/62a87a14b538f.png"
                        alt=""
                      />
                      <hr className="w-full mb-4" />
                      <div className="w-full md:text-lg text-sm font-semibold text-center">
                        Device panel missing/broken
                      </div>
                      <div className="w-full"></div>
                    </div>
                  </label>
                </li>
              </ul>
            </div>
            <div className="mt-10">
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
    </div>
  );
};

export default PhoneDefects;
