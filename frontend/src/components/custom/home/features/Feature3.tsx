"use client";

import React from "react";
import { CustomImage } from "../../common/CustomImage";
import assets from "../../../../../public/assets/assetsManager";

const Feature3 = () => {
  return (
    <div className=" w-full flex justify-center flex-col items-center ">
      <div>
        <h2 className=" font-raleway font-[600] text-white/100 text-[2.5rem] w-[38rem] text-center ">
          Powering Group Interactions with Integrated Video Meetings
        </h2>
      </div>
      <div className=" w-[70rem] mt-[5rem] ">
        <CustomImage
          src={assets.image.Feature3Image}
          alt="feature-1"
          width={500}
          height={500}
          className="hero-image-bg w-full  "
        />
      </div>
    </div>
  );
};

export default Feature3;
