import React from "react";
import xrlogo from "/xrLogo.png";
import moon from "/gpmoon.png";
import eid from "/EID.png";
import mubarak from "/Mubarak.png";

const XriSmartPage = () => {
  return (
    <div className='md:h-screen w-full bg-[url("/gradient.png")]'>
      <div className='bg-[url("/design.png")] w-full h-full'>
        {/* nav of ui  */}
        <header>
          <div className="mx-auto max-w-screen-xl px-4 ">
            <div className="flex items-center justify-between">
              <img src={xrlogo} className="md:w-1/4 w-20" alt="" />

              <div className="flex justify-end items-center">
                <img src={moon} className=" md:w-1/3 w-1/3 " alt="" />

                <div className="inline-flex flex-col justify-center items-center ">
                  {/* <img src={eid} className="md:w-2/5 w-1/4" alt="" />
                  <img src={mubarak} className="md:w-2/3 w-1/2" alt="" /> */}

                  <h1 class="md:text-6xl leading-12  text-6xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#FFEAB7] to-[#9D740E] font-sansita italic">
                    EID
                  </h1>
                  <h1 class="md:text-3xl leading-7 text-3xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#FFEAB7] to-[#9D740E] font-sansita italic">
                    Mubarak
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* nav of ui end  */}
        <div className="flex flex-wrap justify-center items-center px-20 gap-x-4 gap-y-4 mt-7">
          <div className="w-[225px] h-[150px] bg-contain flex justify-center items-center bg-[url('/Board.png')] font-sansita font-bold italic text-3xl text-center px-2">
            SOCIAL MEDIA AR FILTER
          </div>
          <div className="w-[225px] h-[150px] bg-contain flex justify-center items-center bg-[url('/Board.png')] font-sansita font-bold italic text-3xl text-center px-2">
            SOCIAL MEDIA AR FILTER
          </div>
          <div className="w-[225px] h-[150px] bg-contain flex justify-center items-center bg-[url('/Board.png')] font-sansita font-bold italic text-3xl text-center px-2">
            SOCIAL MEDIA AR FILTER
          </div>
          <div className="w-[225px] h-[150px] bg-contain flex justify-center items-center bg-[url('/Board.png')] font-sansita font-bold italic text-3xl text-center px-2">
            SOCIAL MEDIA AR FILTER
          </div>
        </div>
      </div>
    </div>
  );
};

export default XriSmartPage;
