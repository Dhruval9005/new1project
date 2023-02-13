import React from "react";
import { Carousel } from "flowbite-react";

const Banner = ({ banner }: any) => {
  return (
    <div className="Banner">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={3000}>
          {banner.map((x: any, n: any) => (
            <a key={n} href="#">
              <img className="w-full" src={x} />
            </a>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
