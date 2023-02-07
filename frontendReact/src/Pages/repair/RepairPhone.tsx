import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const RepairPhone = () => {
  let naviget = useNavigate();
  let [phoneModel, setphoneModel] = useState();

  const brand = [
    { value: "samsung", label: "Samsung" },
    { value: "Apple", label: "Apple" },
    { value: "Xiaomi", label: "Xiaomi" },
  ];
  const model = [
    { value: "samsung S22", label: "Samsung S22" },
    { value: "Iphone 14", label: "Iphone 14" },
    { value: "Xiaomi 13", label: "Xiaomi 13" },
  ];

  function SelectModel(selectedOption: any) {
    setphoneModel(selectedOption);
  }

  function next() {
    naviget(`/Repair/${phoneModel}`);
  }
  return (
    <div className="repair h-fit md:mt-28 mb-28">
      <div className="container mx-auto">
        <div className="relative flex flex-col min-h-full justify-center">
          <div className="w-full p-6 m-auto lg:max-w-4xl flex flex-col">
            <div className="brand p-3">
              <Select
                className="text-2xl"
                classNamePrefix="select Brand"
                isClearable={true}
                isSearchable={true}
                name="brand"
                options={brand}
                // onChange={(e) => setphoneBrand(e?.value)}
              />
            </div>
            <div className="model p-3">
              <Select
                className="text-2xl"
                classNamePrefix="select Model"
                isClearable={true}
                isSearchable={true}
                name="model"
                options={model}
                onChange={SelectModel}
              />
            </div>
            <div className="p-3">
              <button
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                onClick={next}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepairPhone;
