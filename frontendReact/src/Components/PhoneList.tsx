import React from "react";
import { TablerIcon } from "@tabler/icons";
import { Phone } from "./Phone";

interface phonelist {
  phone: {
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
    ram: string;
    storage: string;
  }[];
}

const PhoneList = ({ phone }: phonelist) => {
  return (
    <>
      {phone?.map((curElem, index) => (
        <Phone data={curElem} info="" key={index} />
      ))}
    </>
  );
};

export default PhoneList;
