import React, { useState } from "react";
import Select from "react-select";

const Sidebir = () => {
  let [firstPhone, setFirstPhone] = useState({});
  let [secondPhone, setSecondPhone] = useState({});
  const model = [
    { value: "samsung S22", label: "Samsung S22" },
    { value: "Iphone 14", label: "Iphone 14" },
    { value: "Xiaomi 13", label: "Xiaomi 13" },
  ];

  function FirstSelect(selectedOption: any) {
    setFirstPhone(selectedOption);
  }
  function SecondSelect(selectedOption: any) {
    setSecondPhone(selectedOption);
  }

  return (
    <div className="siderbir">
      <div className="flex space-x-2">
        <div>
          <div
            className="offcanvas offcanvas-start fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 left-0 border-none w-96"
            tabIndex={-1}
            id="offcanvas"
            aria-labelledby="offcanvasLabel"
          >
            <div className="offcanvas-header flex items-center justify-between p-4">
              <a href="/">
                <h5
                  className="offcanvas-title mb-0 leading-normal font-semibold"
                  id="offcanvasLabel"
                >
                  <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
                    Tran<span className="text-purple-700">x</span>
                  </span>
                </h5>
              </a>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body flex-grow p-4 overflow-y-auto">
              <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                <li>
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                      <h2
                        className="accordion-header mb-0"
                        id="flush-headingTwo"
                      >
                        <button
                          className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          New Phone
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body py-4 px-5">
                          <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                            <li className="nav-item p-2">
                              <a
                                className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                                href="/newphone"
                              >
                                Serch new phone
                              </a>
                            </li>
                            <li className="nav-item p-2">
                              <a
                                className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                                href="/porupar"
                              >
                                Porupar phone
                              </a>
                            </li>
                            <li className="nav-item p-2">
                              <a
                                className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                                href="/sell"
                              >
                                Letest phone
                              </a>
                            </li>
                            <li className="nav-item p-2">
                              <a
                                className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                                href="/sell"
                              >
                                Upcoming phone
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                      <h2
                        className="accordion-header mb-0"
                        id="flush-headingOne"
                      >
                        <button
                          className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          Used phone
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body py-4 px-5">
                          <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                            <li className="nav-item p-2">
                              <a
                                className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                                href="/buy"
                              >
                                used phone
                              </a>
                            </li>
                            <li className="nav-item p-2">
                              <a
                                className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                                href="/buy"
                              >
                                used phone lone
                              </a>
                            </li>
                            <li className="nav-item p-2">
                              <a
                                className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                                href="/buy"
                              >
                                used phone busnoss
                              </a>
                            </li>
                            <li className="nav-item p-2">
                              <a
                                className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                                href="/buy"
                              >
                                servic center
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                      <h2
                        className="accordion-header mb-0"
                        id="flush-headingThree"
                      >
                        <button
                          className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          sell phone
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body py-4 px-5">
                          <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                            <li className="nav-item p-2">
                              <a
                                className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                                href="/sell"
                              >
                                Sell phone
                              </a>
                            </li>
                            <li className="nav-item p-2">
                              <a
                                className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                                href="/sell"
                              >
                                Scrap phone
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                      <h2
                        className="accordion-header mb-0"
                        id="flush-headingFore"
                      >
                        <button
                          className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFore"
                          aria-expanded="false"
                          aria-controls="flush-collapseFore"
                        >
                          Compare phone
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFore"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingFore"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body py-4 px-5">
                          <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                            <li className="nav-item p-2">
                              <Select
                                classNamePrefix="select Brand"
                                isClearable={true}
                                isSearchable={true}
                                name="brand"
                                options={model}
                                onChange={FirstSelect}
                              />
                            </li>
                            <li className="nav-item p-2">
                              <Select
                                classNamePrefix="select Brand"
                                isClearable={true}
                                isSearchable={true}
                                name="brand"
                                options={model}
                                onChange={SecondSelect}
                              />
                            </li>
                            <li className="nav-item p-2">
                              <button
                                className="md:text-lg w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                                // onClick={next}
                              >
                                Compare phone
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebir;
