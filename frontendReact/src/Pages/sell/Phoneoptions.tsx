// import axios from "axios";
// import { Label } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { TransitionGroup } from "semantic-ui-react";

const Phoneoptions = () => {
  let navigate = useNavigate();
  // let [options, setOptions] = useState([]);

  let [call, setCall] = useState("");
  let [touch, setTouch] = useState("");
  let [original_screen, setOriginal_screen] = useState("");
  let [warranty, setWarranty] = useState("");
  let [imei, setImei] = useState("");

  function sendphoneinfo() {
    navigate(`${window.location.pathname}/defects`);

    // try {
    //   let data = axios.post("/", {
    //     call,
    //     touch,
    //     original_screen,
    //     warranty,
    //     imei,
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
  }

  return (
    <div className="phoneoptions h-fit md:mt-28 mb-28">
      <div className="md:container mx-auto">
        <div className="relative flex flex-col min-h-full justify-center">
          <div className="w-full p-6 m-auto lg:max-w-4xl flex flex-col">
            <div className="mt-4">
              <h3 className="mb-5 md:text-lg text-sm font-medium text-gray-900 dark:text-white">
                1. Are you able to make and receive calls?
              </h3>
              <ul className="grid w-full gap-6 md:grid-cols-2">
                <li>
                  <input
                    type="radio"
                    id="call-yes"
                    name="call"
                    defaultValue=""
                    onChange={() => setCall("true")}
                    className="hidden peer"
                  />
                  <label
                    htmlFor="call-yes"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-purple-500 peer-checked:border-purple-600 peer-checked:text-purple-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full md:text-lg text-sm font-semibold">
                        Yes
                      </div>
                      <div className="w-full"></div>
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="call-no"
                    name="call"
                    defaultValue=""
                    onChange={() => setCall("false")}
                    className="hidden peer"
                  />
                  <label
                    htmlFor="call-no"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-purple-500 peer-checked:border-purple-600 peer-checked:text-purple-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full md:text-lg text-sm font-semibold">
                        No
                      </div>
                      <div className="w-full"></div>
                    </div>
                  </label>
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="mb-5 md:text-lg text-sm font-medium text-gray-900 dark:text-white">
                2. Is your device's touch screen working properly?
              </h3>
              <ul className="grid w-full gap-6 md:grid-cols-2">
                <li>
                  <input
                    type="radio"
                    id="touch-yes"
                    name="touch"
                    defaultValue=""
                    onChange={() => setTouch("true")}
                    className="hidden peer"
                  />
                  <label
                    htmlFor="touch-yes"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-purple-500 peer-checked:border-purple-600 peer-checked:text-purple-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full md:text-lg text-sm font-semibold">
                        Yes
                      </div>
                      <div className="w-full"></div>
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="touch-no"
                    name="touch"
                    defaultValue=""
                    onChange={() => setTouch("false")}
                    className="hidden peer"
                  />
                  <label
                    htmlFor="touch-no"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-purple-500 peer-checked:border-purple-600 peer-checked:text-purple-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full md:text-lg text-sm font-semibold">
                        No
                      </div>
                      <div className="w-full"></div>
                    </div>
                  </label>
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="mb-5 md:text-lg text-sm font-medium text-gray-900 dark:text-white">
                3. Is your phone's screen original?
              </h3>
              <ul className="grid w-full gap-6 md:grid-cols-2">
                <li>
                  <input
                    type="radio"
                    id="original_screen-yes"
                    name="original_screen"
                    defaultValue=""
                    onChange={() => setOriginal_screen("true")}
                    className="hidden peer"
                  />
                  <label
                    htmlFor="original_screen-yes"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-purple-500 peer-checked:border-purple-600 peer-checked:text-purple-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full md:text-lg text-sm font-semibold">Yes</div>
                      <div className="w-full"></div>
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="original_screen-no"
                    name="original_screen"
                    defaultValue=""
                    onChange={() => setOriginal_screen("false")}
                    className="hidden peer"
                  />
                  <label
                    htmlFor="original_screen-no"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-purple-500 peer-checked:border-purple-600 peer-checked:text-purple-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full md:text-lg text-sm font-semibold">No</div>
                      <div className="w-full"></div>
                    </div>
                  </label>
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="mb-5 md:text-lg text-sm font-medium text-gray-900 dark:text-white">
                4. Is your device under brand warranty?
              </h3>
              <ul className="grid w-full gap-6 md:grid-cols-2">
                <li>
                  <input
                    type="radio"
                    id="warranty-yes"
                    name="warranty"
                    defaultValue=""
                    onChange={() => setWarranty("true")}
                    className="hidden peer"
                  />
                  <label
                    htmlFor="warranty-yes"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-purple-500 peer-checked:border-purple-600 peer-checked:text-purple-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full md:text-lg text-sm font-semibold">Yes</div>
                      <div className="w-full"></div>
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="warranty-no"
                    name="warranty"
                    defaultValue=""
                    onChange={() => setWarranty("false")}
                    className="hidden peer"
                  />
                  <label
                    htmlFor="warranty-no"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-purple-500 peer-checked:border-purple-600 peer-checked:text-purple-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full md:text-lg text-sm font-semibold">No</div>
                      <div className="w-full"></div>
                    </div>
                  </label>
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="mb-5 md:text-lg text-sm font-medium text-gray-900 dark:text-white">
                5. Do you have valid bill with same IMEI?
              </h3>
              <ul className="grid w-full gap-6 md:grid-cols-2">
                <li>
                  <input
                    type="radio"
                    id="imei-yes"
                    name="imei"
                    defaultValue=""
                    onChange={() => setImei("true")}
                    className="hidden peer"
                  />
                  <label
                    htmlFor="imei-yes"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-purple-500 peer-checked:border-purple-600 peer-checked:text-purple-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full md:text-lg text-sm font-semibold">Yes</div>
                      <div className="w-full"></div>
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="imei-no"
                    name="imei"
                    defaultValue=""
                    onChange={() => setImei("false")}
                    className="hidden peer"
                  />
                  <label
                    htmlFor="imei-no"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-purple-500 peer-checked:border-purple-600 peer-checked:text-purple-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full md:text-lg text-sm font-semibold">No</div>
                      <div className="w-full"></div>
                    </div>
                  </label>
                </li>
              </ul>
            </div>
            <div className="mt-10">
              <button
                onClick={sendphoneinfo}
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

export default Phoneoptions;
