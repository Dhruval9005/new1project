import { useState, useEffect, useReducer, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Accordion } from "@mantine/core";
// import { phoneInfo } from "../../context/PhoneContext";
import { Phone } from "../../Components/Phone";
import Filters from "../../Components/Filters";
import { TablerIcon } from "@tabler/icons";
import FilterReducer, { InitialState } from "../../reducer/FilterReducer";
import { useFilterContext } from "../../context/Filterscontext";
import PhoneList from "../../Components/PhoneList";
import ErrorPage from "../ErrorPage";

type phone = {
  name: string;
  img: string;
  brand: string;
  info: {
    label: string;
    icon: TablerIcon;
  }[];
  value: {
    for: string;
    price: number;
  }[];
}[];

const Buyphone = () => {
  let naviget = useNavigate();
  let [phoneinfo, setPhoneinfo] = useState<phone>([]);
  const [state, dispatch] = useReducer(FilterReducer, InitialState);
  const { filter_phone } = useFilterContext();

  useEffect(() => {
    getPhoneInfo();
  }, [filter_phone]);

  async function getPhoneInfo() {
    setPhoneinfo(filter_phone);
  }

  // function buyphone(phone: string) {
  //   naviget(`${window.location.pathname}/${phone}`);
  // }

  return (
    <div className="buy h-fit md:mt-10 mb-28">
      <div className="container mx-auto">
        <h1 className="md:text-4xl text-2xl mt-6 mx-10">Buy Old Phone</h1>
        <div className="flex md:flex-row flex-col">
          <div className="filter w-52 my-9 mx-10 hidden md:block">
            <Filters />
          </div>
          <div className="md:hidden block">
            <Accordion variant="separated" radius="md">
              <Accordion.Item value="customization">
                <Accordion.Control>Filter</Accordion.Control>
                <Accordion.Panel>
                  <Filters />
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="main flex justify-center my-9 flex-wrap gap-20 md:w-3/4">
            {phoneinfo.length > 0 ? (
              phoneinfo.map((curElem, index) => (
                <Phone key={index} data={curElem} info="Buy Phone" />
              ))
            ) : (
              <ErrorPage title="Phone Not Found" description="" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buyphone;
