import React from "react";
import gptop from "../../assets/gptopbg.png";
import gplogo from "../../assets/GPlogo.png";
import gpmoon from "../../assets/gpmoon.png";

const GpSmartPage = () => {
  return (
    <div className="bg-[#3882e7] relative">
        <img src={gptop} className="absolute inset-0 z-10" alt=" top banner" />
        <img
          src={gplogo}
          className="absolute top-5 left-0 md:w-52"
          alt="gplogo"
        />
        <img
          src={gpmoon}
          className="absolute top-5 right-10 md:w-24"
          alt="gpmoon"
        />
      <div>
        <div>
          <div className="bg-[#00a3ff]">asldkfj</div>
        </div>
      </div>
    </div>
  );
};

export default GpSmartPage;
