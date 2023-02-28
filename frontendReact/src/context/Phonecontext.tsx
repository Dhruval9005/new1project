import { IconUsers, TablerIcon } from "@tabler/icons";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Phone } from "../Components/Phone";

export type Phone = {
  name: string;
  img: string;
  brand: string;
  info: {
    label: string;
    icon: TablerIcon | string;
  }[];
  value: {
    for: string;
    price: number;
  }[];
  ram: string;
  storage: string;
}[];

export interface PhoneContextInterface {
  phone: Phone;
  setPhone: Dispatch<SetStateAction<Phone>>;
}

type phoneProviderProps = {
  children: ReactNode;
};

const defaultState = {
  phone: [
    {
      name: "",
      img: "",
      brand: "",
      info: [
        {
          label: "",
          icon: "",
        },
      ],
      value: [
        {
          for: "",
          price: 0,
        },
      ],
      ram: "",
      storage: "",
    },
  ],
  setPhone: (phone: Phone) => {},
} as PhoneContextInterface;

export const PhoneContext = createContext(defaultState);

export function PhoneContextProvider({ children }: phoneProviderProps) {
  const [phone, setPhone] = useState<Phone>(defaultState.phone);

  // const getPhone ()

  // useEffect(()=>{
  //   getPhone()
  // },[])

  return (
    <PhoneContext.Provider value={{ phone, setPhone }}>
      {children}
    </PhoneContext.Provider>
  );
}

export const usePhoneContext = () => {
  return useContext(PhoneContext);
};

export const phoneInfo = [
  {
    name: "Xiaomi 12 Pro",
    img: "https://m.media-amazon.com/images/I/31UhwG+XTJL._SY300_SX300_.jpg",
    brand: "mi",
    info: [
      { label: "108MP Quad Camera + OIS", icon: IconUsers },
      { label: "Qualcomm® Snapdragon™ 865", icon: IconUsers },
      {
        label: "16.94cm (6.67) 3D Curved E3 AMOLED Display",
        icon: IconUsers,
      },
      {
        label:
          "LiquidCool 2.0 Vapor Chamber + 6 Stack Graphite + Graphene Cooling System",
        icon: IconUsers,
      },
      { label: "LPDDR5 RAM + UFS 3.0 Storage", icon: IconUsers },
      {
        label: "30W Wireless Charging + 10W Reverse Charging",
        icon: IconUsers,
      },
    ],
    value: [
      { for: "128 Gb", price: 55999 },
      { for: "246 Gb", price: 25000 },
    ],
    ram: "8 GB",
    storage: "128 GB",
  },
  {
    name: "realme narzo 50",
    img: "https://m.media-amazon.com/images/I/81gRC3KTeaL._SX679_.jpg",
    brand: "realme",
    info: [
      { label: "108MP Quad Camera + OIS", icon: IconUsers },
      { label: "Qualcomm® Snapdragon™ 865", icon: IconUsers },
      {
        label: "16.94cm (6.67) 3D Curved E3 AMOLED Display",
        icon: IconUsers,
      },
      {
        label:
          "LiquidCool 2.0 Vapor Chamber + 6 Stack Graphite + Graphene Cooling System",
        icon: IconUsers,
      },
      { label: "LPDDR5 RAM + UFS 3.0 Storage", icon: IconUsers },
      {
        label: "30W Wireless Charging + 10W Reverse Charging",
        icon: IconUsers,
      },
    ],
    value: [
      { for: "128 Gb", price: 12999 },
      { for: "246 Gb", price: 25000 },
    ],
    ram: "6 GB",
    storage: "128 GB",
  },
  {
    name: "OnePlus 11 5G",
    img: "https://m.media-amazon.com/images/I/414+xRBltFL._SY300_SX300_.jpg",
    brand: "OnePlus",
    info: [
      { label: "108MP Quad Camera + OIS", icon: IconUsers },
      { label: "Qualcomm® Snapdragon™ 865", icon: IconUsers },
      {
        label: "16.94cm (6.67) 3D Curved E3 AMOLED Display",
        icon: IconUsers,
      },
      {
        label:
          "LiquidCool 2.0 Vapor Chamber + 6 Stack Graphite + Graphene Cooling System",
        icon: IconUsers,
      },
      { label: "LPDDR5 RAM + UFS 3.0 Storage", icon: IconUsers },
      {
        label: "30W Wireless Charging + 10W Reverse Charging",
        icon: IconUsers,
      },
    ],
    value: [
      { for: "128 Gb", price: 61999 },
      { for: "246 Gb", price: 25000 },
    ],
    ram: "4 GB",
    storage: "64 GB",
  },
  {
    name: "samsung s23",
    img: "https://m.media-amazon.com/images/I/61bM8Mojf6L._SX679_.jpg",
    brand: "samsung",
    info: [
      { label: "108MP Quad Camera + OIS", icon: IconUsers },
      { label: "Qualcomm® Snapdragon™ 865", icon: IconUsers },
      {
        label: "16.94cm (6.67) 3D Curved E3 AMOLED Display",
        icon: IconUsers,
      },
      {
        label:
          "LiquidCool 2.0 Vapor Chamber + 6 Stack Graphite + Graphene Cooling System",
        icon: IconUsers,
      },
      { label: "LPDDR5 RAM + UFS 3.0 Storage", icon: IconUsers },
      {
        label: "30W Wireless Charging + 10W Reverse Charging",
        icon: IconUsers,
      },
    ],
    value: [
      { for: "128 Gb", price: 79999 },
      { for: "246 Gb", price: 25000 },
    ],
    ram: "8 GB",
    storage: "128 GB",
  },
  {
    name: "SAMSUNG Galaxy Z",
    img: "https://m.media-amazon.com/images/I/41qW6++dNmL.jpg",
    brand: "samsung",
    info: [
      { label: "108MP Quad Camera + OIS", icon: IconUsers },
      { label: "Qualcomm® Snapdragon™ 865", icon: IconUsers },
      {
        label: "16.94cm (6.67) 3D Curved E3 AMOLED Display",
        icon: IconUsers,
      },
      {
        label:
          "LiquidCool 2.0 Vapor Chamber + 6 Stack Graphite + Graphene Cooling System",
        icon: IconUsers,
      },
      { label: "LPDDR5 RAM + UFS 3.0 Storage", icon: IconUsers },
      {
        label: "30W Wireless Charging + 10W Reverse Charging",
        icon: IconUsers,
      },
    ],
    value: [
      { for: "128 Gb", price: 89999 },
      { for: "246 Gb", price: 25000 },
    ],
    ram: "8 GB",
    storage: "128 GB",
  },
];
