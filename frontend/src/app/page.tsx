import Footer from "@/components/custom/common/footer";
import Navbar from "@/components/custom/common/nav/Navbar";
import Feature1 from "@/components/custom/home/features/Feature1";
import Feature2 from "@/components/custom/home/features/Feature2";
import Feature3 from "@/components/custom/home/features/Feature3";
import Feature4 from "@/components/custom/home/features/Feature4";

import Hero from "@/components/custom/home/Hero";
import React from "react";

const HomePage = () => {
  return (
    <div className=" bg-[#0A0A16] pb-[10rem] relative overflow-clip ">
      <Navbar />
      <div>
        <Hero />
        <div className="relative mt-[13rem] ">
          <Feature1 />
        </div>
        <div className="relative mt-[13rem] ">
          <Feature2 />
        </div>
        <div className="relative mt-[10rem] ">
          <Feature3 />
        </div>
        <div className="relative mt-[10rem] ">
          <Feature4 />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
