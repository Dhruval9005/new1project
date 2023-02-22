import buying from "../assets/buying.png";
import commerce from "../assets/commerce.png";
import repairing from "../assets/repairing.png";
import visit from "../assets/visit.png";
import bidding from "../assets/auction.png";

const Navbutton = () => {
  return (
    <>
      <div className="container mx-auto pt-10 h-fit mb-10">
        <div className="flex flex-col justify-center overflow-hidden">
          <div className="w-full p-2 m-auto lg:max-w-4xl">
            <div className="flex flex-col justify-center flex-wrap">
              <div className="link button flex flex-col justify-center content-center flex-wrap max-h-max">
                <div className="mb-5 flex flex-wrap gap-4 justify-center">
                  <a href="/sell" className="">
                    <button className="w-40 h-36 text-center">
                      <img src={commerce} className="w-16 mx-auto mb-2" />
                      <span>Sell Phones</span>
                    </button>
                  </a>
                  <a href="/buy" className="">
                    <button className="w-40 h-36 text-center">
                      <img src={buying} className="w-16 mx-auto mb-2" />
                      <span>Buy Phone</span>
                    </button>
                  </a>
                  <a href="/repair" className="">
                    <button className="w-40 h-36 text-center">
                      <img src={repairing} className="w-16 mx-auto mb-2" />
                      <span>Repair Phone</span>
                    </button>
                  </a>
                  <a href="/store" className="">
                    <button className="w-40 h-36 text-center">
                      <img src={visit} className="w-16 mx-auto mb-2" />
                      <span>Visit Our Store</span>
                    </button>
                  </a>
                </div>
                <div className="flex justify-center">
                  <a href="/bidding" className="">
                    <button className="w-[335px] max-[320px]:w-40 h-36 text-center">
                      <img src={bidding} className="w-16 mx-auto mb-2" />
                      <span className="sm:text-2xl">Bid on Phone</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbutton;
