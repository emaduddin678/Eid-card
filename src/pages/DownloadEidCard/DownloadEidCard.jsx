import React from "react";
import xrlogo from "/xrLogo.png";
import moon from "/gpmoon.png";
import ring from "../../assets/ring.png";
import ringbox from "../../assets/ringbox.png";
import globe from "../../assets/globe.png";
import cone from "../../assets/cone.png";

const DownloadEidCard = () => {
  return (
    <div className='min-h-screen h-full w-full bg-[url("/gradient.png")] overflow-hidden '>
      <div className='bg-[url("/design.png")] bg-contain bg-repeat-y w-full min-h-screen h-full flex flex-col'>
        {/* nav of ui  */}
        <header className="pb-6">
          <div className="mx-auto max-w-screen-xl px-4 ">
            <div className="flex items-center justify-center">
              <div className="flex justify-center items-center">
                <img
                  src={moon}
                  className=" md:w-1/3 w-1/3 sm:p-0 pt-2 "
                  alt=""
                />

                <div className="inline-flex flex-col justify-center items-center ">
                  <h1 className="md:text-6xl  sm:text-6xl text-3xl sm:leading-12 leading-7 text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#FFEAB7] to-[#9D740E] font-sansita italic">
                    EID
                  </h1>
                  <h1 className="md:text-3xl  sm:text-3xl text-sm sm:leading-7 leading-4  text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#FFEAB7] to-[#9D740E] font-sansita italic">
                    Mubarak
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* nav of ui end  */}
        {/* content box start  */}
        <div className="h-full relative  w-full">
          <div className="w-full relative">
            <img className="w-full" src="Card.png" alt="" />
            
          </div>

          <div className="absolute left-2/4  top-2/4 -translate-x-2/4 -translate-y-2/3 text-center italic sm:text-base text-xs ">
            <h3 className="text-left my-2 mt-12">Dear Emad,</h3>
            <p className="text-justify">
              May the joyous occasion of Eid-Ul-Fitr fill your heart with peace,
              happiness, and countless blessings. Wishing you and your loved
              ones a beautiful Eid filled with laughter, warmth, and cherished
              moments. Best Regards, Imran 🌙✨
            </p>
            <h3 className="text-left my-2">Best Regrads,</h3>
            <h3 className="text-left">Imran🌙✨</h3>
          </div>
          <div className="flex gap-11 px-8 mb-14 mt-4">
            {" "}
            <button className="hidden text-center w-full mx-auto  px-7 py-1 rounded-lg font-sansita text-base font-bold text-[#450745] bg-gradient-to-br from-[#FFEAB7] to-[#9D740E] mt-7">
              Try again
            </button>
            <button className="hidden text-center w-full mx-auto px-7 py-1 rounded-lg font-sansita text-base font-bold text-[#450745] bg-gradient-to-br from-[#FFEAB7] to-[#9D740E] mt-7">
              Share
            </button>
          </div>
        </div>
        {/* content box end*/}
      </div>
    </div>
  );
};

export default DownloadEidCard;
