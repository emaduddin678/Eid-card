import React, { useEffect, useRef } from "react";
import xrlogo from "/xrLogo.png";
import moon from "/gpmoon.png";
// import eid from "/EID.png";
// import mubarak from "/Mubarak.png";
import ring from "../../assets/ring.png";
import ringbox from "../../assets/ringbox.png";
import globe from "../../assets/globe.png";
import cone from "../../assets/cone.png";
import Animatebg from "../../components/Animatebg";
import { Link } from "react-router-dom";
const Greetings = () => {
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
        <div className="flex flex-col flex-grow justify-between items-center  md:px-20  gap-x-4 sm:gap-y-4  relative h-full py-16">
          <div className="flex flex-col justify-center items-center gap-2 leading-10">
            <p className="px-2 text-5xl leading-[64px] text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFEAB7] to-[#c08b06] font-sansita italic">
              Customize your EID greeting with
            </p>
            <img src={xrlogo} className="md:w-1/4 w-20 md:pt-3" alt="" />
          </div>
          <Link
            to={"/greetingform"}
            className="inline-block px-4 py-2 rounded-2xl font-sansita text-base font-bold text-[#450745] bg-gradient-to-br from-[#FFEAB7] to-[#9D740E] "
          >
            Lat’s start sharing !
          </Link>
          {/* <Animatebg src={globe} />   */}
          <img
            src={globe}
            className="a sm:w-36 w-20 absolute sm:left-16 sm:-top-12 xsm:left-14 left-0 top-28 opacity-30"
            alt="globe"
          />

          <img
            src={cone}
            // ref={divRef}
            className="b sm:w-52 w-32 absolute sm:left-20 sm:-bottom-20 xsm:left-6 left-0 bottom-20 opacity-30"
            alt="cone shape"
          />
          <img
            src={ringbox}
            // ref={divRef}
            className="c sm:w-36 w-20 absolute sm:right-16 sm:-top-2 xsm:right-16 -rotate-[30deg] bottom-0 right-0 opacity-30"
            alt="box ring"
          />
          <img
            src={ring}
            // ref={divRef}
            className="d sm:w-36 w-24 absolute sm:right-0 sm:-bottom-16 xsm:right-10 right-0 opacity-30"
            alt="ring"
          />
        </div>
        {/* content box end*/}
      </div>
    </div>
  );
};

export default Greetings;
