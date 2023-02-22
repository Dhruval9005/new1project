import React from "react";
import { Carousel } from "flowbite-react";

interface Props {
  banner: string[];
}

const Banner = ({ banner }: Props) => {
  return (
    <>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={3000}>
          {banner.map((x, n) => (
            <a key={n} href="#">
              <img className="w-full" src={x} />
            </a>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Banner;
