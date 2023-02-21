import mi from "./assets/Mi10.jpg";
import { IconUsers } from "@tabler/icons";
import Userprofile from "./Pages/user/Userprofile";

const Expr = () => {
  const phoneinfo = {
    name: "Mi 10",
    img: mi,
    brand: "Mi",
    info: [
      { label: "108MP Quad Camera + OIS", icon: IconUsers },
      { label: "Qualcomm® Snapdragon™ 865", icon: IconUsers },
      { label: "16.94cm (6.67) 3D Curved E3 AMOLED Display", icon: IconUsers },
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
      { for: "6 GB/128 GB", price: "21,000" },
      { for: "8 GB/246 GB", price: "25,000" },
    ],
  };

  return (
    <div className="expr">
      <Userprofile />
      {/* <div className="container mx-auto pt-10 h-fit mb-10">
        <div className="flex flex-col justify-center overflow-hidden">
          <div className="w-full p-2 m-auto lg:max-w-4xl">
            <div className="flex flex-col justify-center flex-wrap">
              <div className="link button flex flex-col justify-center content-center flex-wrap max-h-max">
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Expr;
