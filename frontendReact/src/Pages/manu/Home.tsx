import { Link } from "react-router-dom";
import { Carousel } from "flowbite-react";
import { useState } from "react";

import buying from "../../assets/buying.png";
import commerce from "../../assets/commerce.png";
import repairing from "../../assets/repairing.png";
import visit from "../../assets/visit.png";
import bidding from "../../assets/auction.png";

const Home = () => {
  let [banner, setBanner] = useState([
    "https://flowbite.com/docs/images/carousel/carousel-1.svg",
    "https://flowbite.com/docs/images/carousel/carousel-2.svg",
    "https://flowbite.com/docs/images/carousel/carousel-3.svg",
    "https://flowbite.com/docs/images/carousel/carousel-4.svg",
    "https://flowbite.com/docs/images/carousel/carousel-5.svg",
  ]);

  return (
    <div className="Home h-fit mb-28">
      <div className="banner">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel slideInterval={3000} >
            {banner.map((x, n) => (
              <a key={n} href="#">
                <img className="w-full" src={x} />
              </a>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="container mx-auto pt-10 h-96">
        <div className="flex flex-col justify-center overflow-hidden">
          <div className="w-full p-6 m-auto lg:max-w-4xl">
            <div className="flex flex-col justify-center flex-wrap">
              <div className="link button flex flex-col justify-center content-center flex-wrap max-h-max">
                <div className="mb-10 grid md:grid-cols-4 grid-cols-2 gap-4">
                  <Link to="/sell" className="">
                    <button className="w-40 h-36 text-center">
                      <img src={commerce} className="w-16 mx-auto mb-2" />
                      <span>Sell Phones</span>
                    </button>
                  </Link>
                  <Link to="/buy" className="">
                    <button className="w-40 h-36 text-center">
                      <img src={buying} className="w-16 mx-auto mb-2" />
                      <span>Buy Phone</span>
                    </button>
                  </Link>
                  <Link to="/repair" className="">
                    <button className="w-40 h-36 text-center">
                      <img src={repairing} className="w-16 mx-auto mb-2" />
                      <span>Repair Phone</span>
                    </button>
                  </Link>
                  <Link to="/store" className="">
                    <button className="w-40 h-36 text-center">
                      <img src={visit} className="w-16 mx-auto mb-2" />
                      <span>Visit Our Store</span>
                    </button>
                  </Link>
                </div>
                <div className="flex justify-center">
                  <Link to="/bidding" className="">
                    <button className="w-[335px] h-44 text-center">
                      <img src={bidding} className="w-16 mx-auto mb-2" />
                      <span className="text-2xl">Bid on Phone</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
