import Navbar from "@/components/custom/common/nav/Navbar";
import Hero from "@/components/custom/home/Hero";
import React from "react";

const HomePage = () => {
  return (
    <div className=" bg-[#0A0A16] h-[500rem] relative overflow-clip ">
      <Navbar />
      <div>
        <Hero />
      </div>
    </div>
  );
};

export default HomePage;
