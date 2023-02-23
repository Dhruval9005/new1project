import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Accordion } from "@mantine/core";
import { phoneInfo } from "../../context/PhoneContext";
import { Phone } from "../../Components/Phone";
import Filters from "../../Components/Filters";
import { TablerIcon } from "@tabler/icons";

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
  let [phoneinfo, setPhoneinfo] = useState<phone>();

  useEffect(() => {
    getPhoneInfo();
    // Price();
  }, []);

  async function getPhoneInfo() {
    setPhoneinfo(phoneInfo);
  }

  // function buyphone(phone: string) {
  //   naviget(`${window.location.pathname}/${phone}`);
  // }

  return (
    <div className="buy h-fit md:mt-10 mb-28">
      <div className="container mx-auto">
        <h1 className="md:text-4xl text-2xl mt-6 mx-10">Buy Old Phone</h1>
        <div className="flex md:flex-row flex-col">
          <div className="filter md:w-1/4 my-9 mx-10 hidden md:block">
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
          <div className="main flex justify-center my-9 flex-wrap gap-20">
            {phoneInfo.map((x, n) => (
              <Phone key={n} data={x} info="Buy Phone" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buyphone;
